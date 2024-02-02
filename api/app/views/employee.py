from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession

from app.services.database import get_db

from app.models import Employee as EmployeeModel

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


@router.get("/get-user", response_model=EmployeeSchema)
async def get_employee(id: int, db: AsyncSession = Depends(get_db)):
    employee = await EmployeeModel.get(db, id)
    return employee


@router.get("/get-users", response_model=list[EmployeeSchema])
async def get_employees(db: AsyncSession = Depends(get_db)):
    employees = await EmployeeModel.get_all(db)
    return employees


@router.post("/create-user", response_model=EmployeeSchema)
async def create_employee(employee: EmployeeSchemaCreate, db: AsyncSession = Depends(get_db)):
    employee = await EmployeeModel.create(db, **employee.dict())
    return employee
    

@router.delete("/delete-user", response_model=bool)
async def delete_employee(id: int, db: AsyncSession = Depends(get_db)):
    return await EmployeeModel.delete(db, id)
