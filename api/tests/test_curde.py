def test_crude(client):
    response = client.get("/api/employees/get-employees")
    assert response.status_code == 200
    assert response.json() == []
    