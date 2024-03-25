from app.database import sessionmanager
from app.main import app
from app.config import settings
import pytest
from httpx import AsyncClient


@pytest.fixture
async def client():
    async with AsyncClient(app=app, base_url="http://test") as client:
        yield client

@pytest.fixture(autouse=True, scope="function")
async def setup_database():
    if not sessionmanager._engine:
        sessionmanager.init((settings.db_url_test))
    async with sessionmanager.connect() as connection:
        await sessionmanager.drop_all(connection)
        await sessionmanager.create_all(connection)
    yield
    await sessionmanager.close()
