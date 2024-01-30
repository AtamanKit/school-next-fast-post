-- Create the `employee` table
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    gender VARCHAR,
    age INTEGER,
    email VARCHAR,
    phone VARCHAR,
    education VARCHAR,
    occupation VARCHAR,
    experience_years INTEGER,
    salary INTEGER,
    marital_status VARCHAR,
    number_of_children INTEGER,
);

-- Import data from CSV file
\COPY employee FROM '/var/lib/postgresql/data/10000-rows.csv'