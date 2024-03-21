from sqlalchemy import Boolean, Column, Integer, String

from app.database import Base

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
