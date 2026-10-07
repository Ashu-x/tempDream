# DreamLine backend1

A TypeScript replacement backend using the layered architecture from the root `files` folder.

## Run

1. Copy `.env.example` to `.env` and set `DATABASE_URL`.
2. Run `npm install`.
3. Run `npm run prisma:generate`.
4. Run `npm run prisma:migrate -- --name init` for a new database, or apply the trigger in `sql/001_search.sql` after the `search_vector` field and GIN index exist.
5. Run `npm run dev`.

Prisma owns the models and the `search_vector Unsupported("tsvector")` GIN index in `prisma/schema.prisma`. The SQL file is only needed for the PostgreSQL trigger and backfill, which Prisma schema syntax cannot represent.

## Routes

- `GET /health`
- `GET /api/` and `GET /api/dream/recent`
- `GET /api/dream/anonymous`
- `GET /api/dream/random`
- `GET /api/dream/:dreamid`
- `GET /api/user/:userid`
- `GET /api/relatable-dreams?limit=20`
- `POST /api/submit-dream`
- `GET /api/bulk` and `GET /api/dreams/search?q=...&page=1&limit=10`
