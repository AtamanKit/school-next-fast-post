import os


class Config:
    DB_CONFIG = os.getenv(
        "DB_CONFIG",
        "postgresql+asyncpg://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}".format(
            DB_USER=os.getenv("DB_USER"),
            DB_PASSWORD=os.getenv("DB_PASSWORD"),
            DB_HOST=os.getenv("DB_HOST"),
            DB_NAME=os.getenv("DB_NAME"),
        ),
    )

    # DB_TEST_CONFIG = "postgresql+asyncpg://{DB_TEST_USER}:{DB_TEST_PASSWORD}@{DB_TEST_HOST}/{DB_TEST_NAME}".format(
    #     DB_TEST_USER=os.getenv("DB_TEST_USER"),
    #     DB_TEST_PASSWORD=os.getenv("DB_TEST_PASSWORD"),
    #     DB_TEST_HOST=os.getenv("DB_TEST_HOST"),
    #     DB_TEST_NAME=os.getenv("DB_TEST_NAME"),
    # )

config = Config
