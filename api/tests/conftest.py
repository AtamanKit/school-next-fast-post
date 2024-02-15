import asyncio
from contextlib import ExitStack

import pytest
from fastapi.testclient import TestClient
from pytest_postgresql import factories
from pytest_postgresql.janitor import DatabaseJanitor

from app import init_app
from app.models import Employee
from app.services.database import get_db, sessionmanager

@pytest.fixture(autouse=True)
def app():
    with ExitStack():
        yield init_app(init_db=False)

@pytest.fixture
def client(app):
    with TestClient(app) as c:
        yield c

test_database = factories.postgresql_proc(port=None, dbname="test_database")

@pytest.fixture(scope="session")
def event_loop():
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()

@pytest.fixture(scope="session", autouse=True)
async def connection_test(test_database, event_loop):
    pg_host = test_database.host
    pg_port = test_database.port
    pg_user = test_database.user
    pg_db = test_database.dbname
    pg_password = test_database.password

    with DatabaseJanitor(
        pg_user,pg_host, pg_port, pg_db, test_database.version, pg_password
    ):
        connection_str = f"postgresql+psycopg://{pg_user}:@{pg_host}:{pg_port}/{pg_db}"
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
