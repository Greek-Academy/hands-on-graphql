# GraphQL Hands-On

- https://graphql.org/

## Backend

- https://expressjs.com/
- [README.md](backend/README.md)

## Frontend

- https://vitejs.dev/
- [README.md](frontend/README.md)

## How to set up

```bash
docker compose build
make setup
cp database/.env.example database/.env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

## Usage

```bash
make front-dev
```

```bash
make back-dev
```
