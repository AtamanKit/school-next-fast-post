from sqlalchemy import Column, Integer, String, select
from sqlalchemy.exc import IntegrityError, NoResultFound
from sqlalchemy.ext.asyncio import AsyncSession

from services.database import Base


class Employee(Base):
    __tablename__ = "employees"
    
    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    first_name = Column(String, index=True)
    last_name = Column(String, index=True)
    gender = Column(String)
    age = Column(Integer)
    email = Column(String, unique=True, index=True, nullable=False)
    phone = Column(String)
    education = Column(String)
    occupation = Column(String)
    experience_years = Column(Integer)
    salary = Column(Integer)
    marital_status = Column(String)
    number_of_children = Column(Integer)

    @classmethod
    async def create(cls, db: AsyncSession, **kwargs):
        transaction = cls(**kwargs)
        db.add(transaction)
        await db.commit()
        await db.refresh(transaction)
        return transaction

    @classmethod
    async def get(cls, db: AsyncSession, id: int):
        try:
            transaction = await db.get(cls, id)
        except NoResultFound:
            return None
        return transaction

    @classmethod
    async def get_all(cls, db: AsyncSession):
        return (await db.execute(select(cls))).scalars().all()

