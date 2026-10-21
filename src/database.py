import logging
import os

from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

load_dotenv()
DB_URL = os.getenv("DB_URL")

if DB_URL:
    engine = create_engine(
        DB_URL,
        pool_size=5,
        max_overflow=10,
        pool_pre_ping=True,
    )
else:
    logging.getLogger(__name__).warning(
        "DB_URL is unset; using process-local in-memory SQLite. "
        "Order data will be lost when the service restarts."
    )
    engine = create_engine(
        "sqlite://",
        connect_args={"check_same_thread": False},
        poolclass=StaticPool,
    )

    from database_schema import Base

    Base.metadata.create_all(bind=engine)

SessionLocal = sessionmaker(bind=engine)
