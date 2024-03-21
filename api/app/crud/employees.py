from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app import models


async def get_employee(db: AsyncSession, id: int):
    result = await db.execute(select(models.Employee).filter(models.Employee.id == id))
    employee = result.scalars().first()
    return employee

async def get_employees(db: AsyncSession, skip: int = 0, limit: int = 100):
    result = await db.execute(select(models.Employee).offset(skip).limit(limit))
    employees = result.scalars().all()
    return employees

async def create_employee(db: AsyncSession, employee: schemas.EmployeeCreate):
    db_employee = models.Employee(**employee.dict())
    db.add(db_employee)
    await db.commit()
    await db.refresh(db_employee)
    return db_employee

async def delete_employee(db: AsyncSession, id: int):
    employee = await get_employee(db, id)
    if employee:
        await db.delete(employee)
        await db.commit()
        return True
    return False
