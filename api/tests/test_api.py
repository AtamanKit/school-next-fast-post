from httpx import AsyncClient
import pytest

@pytest.mark.asyncio
async def test_api_employee(client: AsyncClient):
    response = await client.post("/api/employees/", json={"first_name": "Sofia", "last_name": "Rotaru", "gender": "Female", "age": 70, "email": "sofiarotaru@gmail.com", "phone": "1234567890", "education": "Higher", "occupation": "Singer", "experience_years": 50, "salary": 1000000, "marital_status": "Married", "number_of_children": 2})
    assert response.status_code == 200, response.text

    data = response.json()
    assert data["first_name"] == "Sofia"
    assert data["last_name"] == "Rotaru"
    assert data["email"] == "sofiarotaru@gmail.com"

    response = await client.get("/api/employees/")
    assert response.status_code == 200, response.text

    response = await client.get(f"/api/employees/{data['id']}")
    assert response.status_code == 200, response.text    

    employee = response.json()
    assert employee["first_name"] == "Sofia"
    assert employee["last_name"] == "Rotaru"
    assert employee["email"] == "sofiarotaru@gmail.com"

    response = await client.delete(f"/api/employees/{data['id']}")
    assert response.status_code == 200, response.text
