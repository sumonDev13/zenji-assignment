# ZENJI

Anime-inspired streetwear e-commerce storefront. Built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Testing:** Vitest + React Testing Library
- **CI:** GitHub Actions

## Getting Started

```bash
npm install
cp .env.example .env
npm run dev
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check formatting |
| `npm run test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── about/        # Our Story page
│   ├── collection/   # Collection browsing
│   ├── home/         # Homepage sections (Hero, NewsCarousel, Manifesto)
│   ├── layout/       # Shared layout (Navbar, Footer, AnnouncementBar)
│   ├── lookbook/     # Lookbook gallery
│   └── product/      # Product components (ProductCard, ProductGrid, DropPage, ProductPage)
├── data/             # Product data
├── lib/              # Utilities (env config)
└── types/            # TypeScript types
```

## CI

GitHub Actions runs on push to `main`/`dev/*` and PRs to `main`:
- Prettier format check
- ESLint lint
- TypeScript typecheck
- Vitest tests
