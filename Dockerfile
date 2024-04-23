FROM postgres:latest

ENV POSTGRES_USER=postgres \
    POSTGRES_PASSWORD=123 \
    POSTGRES_DB=desafio03

EXPOSE 5432

CMD ["postgres"]
