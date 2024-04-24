FROM postgres:latest

ENV POSTGRES_USER=postgres \
    POSTGRES_PASSWORD=123 \
    POSTGRES_DB=desafio03

EXPOSE 5432

CMD ["postgres"]

RUN echo "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";" >> /docker-entrypoint-initdb.d/init.sql
