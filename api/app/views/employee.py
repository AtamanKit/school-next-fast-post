from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession

from app.services.database import get_db

from app.models import Employee

router = APIRouter(prefix="/api/employees", tags=["employees"])


class EmployeeSchemaBase(BaseModel):
    first_name: str | None = None
    last_name: str | None = None
    gender: str | None = None
    age: int | None = None
    email: str
    phone: str | None = None
    education: str | None = None
    occupation: str | None = None
    experience_years: int | None = None
    salary: int | None = None
    marital_status: str | None = None
    number_of_children: int | None = None

class EmployeeSchemaCreate(EmployeeSchemaBase):
    pass

class EmployeeSchema(EmployeeSchemaBase):
    id: int

    class Config:
        orm_mode = True

