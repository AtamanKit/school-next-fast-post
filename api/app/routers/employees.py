from fastapi import Depends, APIRouter, HTTPException

from sqlalchemy.ext.asyncio import AsyncSession

from app.crud.employees import get_employee, get_employee_by_email, get_employees, create_employee, delete_employee
from app.schemas import EmployeeSchema, EmployeeSchemaCreate, EmployeeSchemaList
from app.database import get_db

from app import models
from sqlalchemy import select

from typing import List

router = APIRouter()


# Create employee
@router.post("/employees/", response_model=EmployeeSchema)
async def create_employee_route(employee: EmployeeSchemaCreate, db: AsyncSession = Depends(get_db)):
    db_employee = await get_employee_by_email(db, employee.email)
    if db_employee:
        raise HTTPException(status_code=400, detail="Email already registered")
    return await create_employee(db, employee)


# Get all employees
@router.get("/employees/", response_model=list[EmployeeSchema])
async def get_employees_route(skip: int = 0, limit: int = 100, db: AsyncSession = Depends(get_db)):
    return await get_employees(db, skip=skip, limit=limit)
# @router.get("/employees/", response_model=list[EmployeeSchema])
# async def get_employees_route(db: AsyncSession = Depends(get_db)):
#     result = await db.execute(select(models.Employee).offset(9980).limit(50))
#     employees = result.scalars().all()
#     return employees

# Get employee by id
@router.get("/employees/{employee_id}", response_model=EmployeeSchema)
async def get_employee_route(employee_id: int, db: AsyncSession = Depends(get_db)):
    employee = await get_employee(db, employee_id)
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    return employee


# Delete employee by id
@router.delete("/employees/")
async def delete_employee_route(ids: EmployeeSchemaList, db: AsyncSession = Depends(get_db)):
    deleted = await delete_employee(db, ids)
    if not deleted:
        raise HTTPException(status_code=404, detail="Employee not found")
    return {"message": "Employee deleted successfully"}
