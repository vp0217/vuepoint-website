# Vuepoint Academy

Vuepoint Academy – developing highly skilled tech talents. We turn individuals without tech skills into job-ready developers.

## Tech stack

- **Next.js** (App Router)
- **React** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- **MongoDB** (applications storage)

## Getting started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` – start Next.js dev server
- `npm run build` – production build
- `npm run start` – run production server
- `npm run lint` – run ESLint
- `npm run test` – run Vitest

## Environment

Copy `.env.example` to `.env.local` and set:

- `MONGODB_URI` – MongoDB connection string
- `ADMIN_PASSWORD` / `ADMIN_SECRET` – for admin area

## Deploy

Build and start:

```bash
npm run build && npm run start
```

Deploy the `.next` output to any Node.js host (Vercel, Railway, etc.).
