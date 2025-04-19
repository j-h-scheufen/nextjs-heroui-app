# NextJS + Hero UI Monorepo Template

This is a monorepo template set up with Biome for linting and formatting, Husky git hooks, and Commitlint.

It contains a basic NextJS TypeScript app with the Hero UI library and Tailwind CSS installed as well as I18N.

## Environment Variables

The following environment variables are used in this project:

- `NEXT_PUBLIC_APP_URL`: The base URL of the application. If developing locally, this should be set to match your environment, for example, `http://localhost:3000`. On production environments like Vercel, auto-detection is attempted.

Ensure these variables are set in your `.env` file or in your deployment environment.

## Deployment

Run

```
pnpm install
pnpm build
pnpm dev
```

## Installation Notes

The project uses PNPM version 9.x due to a known issue with Corepack in Node.js v23.3.0 related to signature verification. The error occurs because Corepack can't verify the cryptographic signature for PNPM 10.8.1. It was decided to keep PNPM on an older version rather than downgrade Node.js.

