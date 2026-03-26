# DSA Sheet

Full-stack DSA practice tracker: React (Vite) + Express + MongoDB, pnpm + Turborepo.

## Prerequisites

- Node.js **18+**
- **pnpm** 9+
- **MongoDB** running locally, or a **MongoDB Atlas** connection string

## Environment variables

Create a **`.env`** file in the **repository root** (same folder as this `README`). Do **not** commit `.env`; copy from `.env.example` and fill in your values.

```bash
cp .env.example .env
```

| Variable | Required | Description |
|----------|----------|-------------|
| `NODE_ENV` | Optional | Usually `development` locally. |
| `PORT` | Optional | API port (default **5050**). On macOS, port 5000 is often used by AirPlay—5050 avoids that. If you change it, update `VITE_API_URL` and `apps/client/vite.config.ts` proxy `target` to match. |
| `MONGO_URI` | **Yes** | MongoDB connection string, e.g. `mongodb://localhost:27017/dsa-sheet` or Atlas `mongodb+srv://...`. |
| `JWT_SECRET` | **Yes** | Long random string used to sign auth tokens. Change from the example in production. |
| `JWT_EXPIRES_IN` | Optional | Token lifetime (e.g. `7d`). |
| `VITE_API_URL` | Optional | Browser-facing API base URL (e.g. `http://localhost:5050/api`). If unset, the Vite dev server proxies `/api` to the backend. |

The server loads `.env` from the repo root (`apps/server` resolves `../../.env`).

## Setup

```bash
pnpm install
cp .env.example .env
# Edit .env — set MONGO_URI and JWT_SECRET at minimum

pnpm --filter server seed   # seed topics (needs MongoDB)
pnpm dev                    # API + client
```

- Client: Vite dev server (often `http://localhost:5173`)
- API: `http://localhost:<PORT>` (health: `http://localhost:<PORT>/api/health`)

## Scripts

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Run client + server via Turborepo |
| `pnpm dev:client` | Client only |
| `pnpm dev:server` | API only |
| `pnpm build` | Production build |
| `pnpm --filter server seed` | Load DSA topics into MongoDB |

## Monorepo layout

- `apps/client` — React + Vite + Tailwind
- `apps/server` — Express + Mongoose
- `packages/shared` — Shared TypeScript types
