# Repository Guidelines

## Project Structure & Module Organization

This repository contains the Astro static website for Rambow Cloud, the open-source organization at `github.com/rambow-cloud`. Routes live in `src/pages/`; `/zh/` and `/en/` share `src/components/Home.astro`. Maintain bilingual copy and curated project metadata in `src/data/site.ts`. Document metadata and browser-language detection belong in `src/layouts/`; responsive CSS lives in `src/styles/`. Put unchanged static assets in `public/`. GitHub workflows and maintenance configuration live in `.github/`. Generated `dist/`, `.astro/`, and dependencies are ignored.

## Build, Test, and Development Commands

Use Node.js 22.12 or newer and npm; CI uses Node.js 24.

- `npm ci`: install dependencies from the committed lockfile.
- `npm run dev`: start development at `http://localhost:4321/`.
- `npm run check`: check Astro templates and TypeScript.
- `npm run build`: generate static output and sitemaps in `dist/`.
- `npm run preview`: serve the production build locally.
- `npm run format` / `npm run format:check`: apply or verify Prettier formatting.

## Coding Style & Naming Conventions

Use two-space indentation, single quotes in JavaScript/TypeScript, and Prettier with `prettier-plugin-astro`. Name reusable components in PascalCase, such as `Brand.astro`; use lowercase route directories and kebab-case CSS classes. Keep TypeScript strict. Prefer semantic HTML, visible keyboard focus, responsive layouts, and reduced-motion support. Update both language dictionaries together. Ground organization and project claims in their public repositories.

## Testing Guidelines

There is no dedicated test framework or coverage threshold. Run formatting, Astro checks, and the production build once per meaningful change. For visual verification, tell the user to open the local preview and check desktop/mobile layouts, navigation, and both languages. Language changes require checking browser preferences, saved manual choices, and direct language URLs. Avoid redundant validation; repeat checks only after relevant changes or understood failures. Do not use command-line HTTP requests for browser-verifiable results or perform local DNS validation.

## Commit & Pull Request Guidelines

The repository started empty, so no historical commit convention exists. Use descriptive Conventional Commits, for example `feat: add bilingual homepage`. Keep changes focused. PRs should explain the outcome, link related issues, list verification, and attach desktop/mobile screenshots for visual changes. Follow the PR template. PR workflows validate; only main-branch or manual workflows deploy.

## Security & Configuration

Never commit credentials, `.env` files, caches, or build output. Commit `package-lock.json`. Configure GitHub Pages to use GitHub Actions. `SITE_URL` and `BASE_PATH` control deployment URLs; preserve base-aware asset and language links. Let Dependabot propose dependency and Action updates.
