FROM postgres:16.1-alpine

# Copy the initialization SQL script into the container
COPY init.sql /docker-entrypoint-initdb.d/

# Copy the CSV file into the container
COPY 10000-rows.csv /var/lib/postgresql/data/

# Set environment variables
ENV POSTGRES_DB=$DB_NAME
ENV POSTGRES_USER=$DB_USER
ENV POSTGRES_PASSWORD=$DB_PASSWORD

# Expose the default PostgreSQL port
EXPOSE 5432
