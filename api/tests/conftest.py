import os
import asyncio
from contextlib import ExitStack

import pytest
from fastapi.testclient import TestClient
from alembic.config import Config
from alembic.migration import MigrationContext
from alembic.operations import Operations
from alembic.script import ScriptDirectory
from alembic import command
from asyncpg import Connection

from sqlalchemy.ext.asyncio import AsyncEngine

from app import init_app
from app.models import Employee
from app.services.database import get_db, sessionmanager, Base
from app.config import config

import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@pytest.fixture(autouse=True)
def app():
    with ExitStack():
        yield init_app(init_db=False)


@pytest.fixture    
def client(app):
    with TestClient(app) as c:
        yield c


@pytest.fixture(scope="session")
def event_loop(request):
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()


# @pytest.fixture(scope="session", autouse=True)
# async def connection_test(event_loop):
#     connection_str = config.DB_TEST_CONFIG
#     sessionmanager.init(connection_str)
#     yield
#     await sessionmanager.close()


# @pytest.fixture(scope="function", autouse=True)
# async def create_tables(connection_test):
#     async with sessionmanager.connect() as connection:
#         await sessionmanager.drop_all(connection)
#         await sessionmanager.create_all(connection)

########################################################
# def run_migrations(connection: Connection):
#     config = Config("alembic.ini")
#     config.set_main_option("script_location", "alembic")
#     config.set_main_option("sqlalchemy.url", "postgresql+asyncpg://postgres:pass_test@test_db/postgres")
#     script = ScriptDirectory.from_config(config)

#     def upgrade(rev, contest):
#         return script._upgrade_revs("head", rev)

#     context = MigrationContext.configure(connection, opts={"target_metadata": Base.metadata, "fn": upgrade})

#     with context.begin_transaction():
#         with Operations.context(context):
#             context.run_migrations()
########################################################
def run_migrations():
    logger.info("Starting database migrations...s")
    alembic_cfg = Config("alembic.ini")
    alembic_cfg.set_main_option("sqlalchemy.url", "postgresql+asyncpg://postgres:pass_test@test_db/postgres")
    try:
        logger.info("About to run Alembic upgrade to head.")
        command.upgrade(alembic_cfg, "head")
        logger.info("Alembic upgrade to head completed")
    except Exception as e:
        logger.error(f"An error occurred during migrations: {e}")
        raise
########################################################
# @pytest.fixture(scope="session", autouse=True)
# async def setup_database():
#     # Run alemnic migrations on test DB
#     async with sessionmanager.connect() as connection:
#         await connection.run_sync(run_migrations)

#     yield

#     # Teardown
#     await sessionmanager.close()
########################################################
@pytest.fixture(scope="session", autouse=True)
async def setup_database():
    async_engine: AsyncEngine = sessionmanager.async_engine

    async with async_engine.begin() as conn:
        await conn.run_sync(run_migrations)

    yield

# Each test function will receive a new session
@pytest.fixture(scope="function", autouse=True)
async def transactional_session():
    async with sessionmanager.session() as session:
        try:
            await session.begin()
            yield session
        finally:
            await session.rollback()

@pytest.fixture(scope="function")
async def db_session(transactional_session):
    yield transactional_session


@pytest.fixture(scope="function", autouse=True)
async def session_override(app, db_session):
    async def get_db_override():
        yield db_session[0]

    app.dependency_overrides[get_db] = get_db_override
