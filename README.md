# Software Engineer Portfolio

A modern portfolio website built with Next.js, React, and Tailwind CSS.

This project showcases work, technical stack, background, and contact information with a smooth-scrolling single-page layout, interactive animations, and project image carousels.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- GSAP + ScrollTrigger
- Three.js + React Three Fiber + Drei
- Vercel Analytics

## Features

- Single-page portfolio flow with anchored navigation
- Animated hero section with 3D canvas background
- Projects section with alternating layout and animated reveal
- Auto-rotating project image carousel with manual controls
- Tech stack grid with motion transitions
- Resume section
- Contact section with CTA and social links
- Smooth scrolling experience
- Responsive layout across desktop and mobile

## Project Structure

```text
app/
  layout.tsx          # Root layout + metadata + global styles
  page.tsx            # Main page composition
components/
  hero.tsx            # Hero section
  hero-canvas.tsx     # 3D hero background
  projects.tsx        # Projects data + project cards
  project-image-carousel.tsx
  tech-stack.tsx
  resume.tsx
  contact.tsx
  site-nav.tsx
  smooth-scroll.tsx
  reveal.tsx
  section-heading.tsx
  social-icons.tsx
components/ui/
  button.tsx
lib/
  utils.ts
public/
  projects/           # Project screenshots used in carousel
```

## Getting Started

### 1. Install dependencies

Using pnpm (recommended):

```bash
pnpm install
```

Or npm:

```bash
npm install
```

### 2. Run development server

```bash
pnpm dev
```

Open http://localhost:3000

### 3. Build for production

```bash
pnpm build
pnpm start
```

### 4. Lint

```bash
pnpm lint
```

## Personalization Guide

Update the following files to make this portfolio yours:

- Name, metadata title/description: `app/layout.tsx`
- Page section order: `app/page.tsx`
- Hero headline, bio, social links: `components/hero.tsx`
- Projects list (title, description, images, tags): `components/projects.tsx`
- Carousel image dimensions/fallback behavior: `components/project-image-carousel.tsx`
- Tech categories and skills: `components/tech-stack.tsx`
- Resume content: `components/resume.tsx`
- Contact email and social handles: `components/contact.tsx`

### Project Images

Place project screenshots under:

- `public/projects/`

Then reference them in `components/projects.tsx` as:

- `/projects/your-image.png`

If image aspect ratios vary, add entries in `imageDimensions` in `components/project-image-carousel.tsx` for best rendering.

## Scripts

- `dev` - Start local development server
- `build` - Build production bundle
- `start` - Run production server
- `lint` - Run ESLint

## Deployment

This is a Next.js app and can be deployed on Vercel in one click:

1. Push repository to GitHub
2. Import the repo in Vercel
3. Deploy with default Next.js settings

Vercel Analytics is already integrated in production mode via `app/layout.tsx`.

## Notes

- This project currently includes both `pnpm-lock.yaml` and `package-lock.json`. Prefer using one package manager consistently to avoid lockfile drift.
- Some external links are placeholders and should be updated (for example, GitHub links in hero/contact).
