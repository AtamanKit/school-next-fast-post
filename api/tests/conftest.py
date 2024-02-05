import os
import asyncio
from contextlib import ExitStack

import pytest
from fastapi.testclient import TestClient
from sqlalchemy.testing.entities import ComparableEntity

from app import init_app
from app.models import Employee
from app.services.database import get_db, sessionmanager
from app.config import config


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


@pytest.fixture(scope="session", autouse=True)
async def connection_test(event_loop):
    # pg_host = os.getenv("DB_TEST_HOST")
    # pg_port = os.getenv("DB_TEST_PORT")
    # pg_user = os.getenv("DB_TEST_USER")
    # pg_db = os.getenv("DB_TEST_NAME")
    # pg_password = os.getenv("DB_TEST_PASSWORD")

    # connection_str = f"postgresql+asyncpg://{pg_user}:{pg_password}@{pg_host}:{pg_port}/{pg_db}"
    connection_str = config.DB_TEST_CONFIG
    sessionmanager.init(connection_str)
    yield
    await sessionmanager.close()


@pytest.fixture(scope="function", autouse=True)
async def create_tables(connection_test):
    async with sessionmanager.connect() as connection:
        await sessionmanager.drop_all(connection)
        await sessionmanager.create_all(connection)


@pytest.fixture(scope="function", autouse=True)
async def session_override(app, connection_test):
    async def get_db_override():
        async with sessionmanager.session() as session:
            yield session

    app.dependency_overrides[get_db] = get_db_override
