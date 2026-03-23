# Pedro Menzinger Portfolio

Personal portfolio built with React, TypeScript, Vite and Tailwind CSS.

This project was designed as a professional single-page portfolio focused on clean presentation, strong visual hierarchy and a structured front-end architecture. The interface highlights professional profile, technical background, selected projects and contact points in a format that is easy to maintain and extend.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- ESLint

## Features

- Single-page portfolio with section-based navigation
- Light and dark theme support with manual toggle
- Responsive layout for desktop and mobile
- Reusable component structure
- Centralized content through typed data files
- Project cards prepared for future GitHub links
- Visual design system based on CSS variables

## Project Structure

```text
src/
  assets/        Static images and media
  components/    Reusable UI sections and layout pieces
  data/          Portfolio content and project data
  hooks/         Theme and scroll behavior hooks
  pages/         Page-level composition
  types/         Shared TypeScript types
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint:

```bash
npm run lint
```

## Content Maintenance

Most editable portfolio content is centralized in:

```text
src/data/portfolio.ts
```

This includes:

- navigation items
- hero information
- about section content
- expertise blocks
- projects
- contact links

## Design Notes

The project uses a variable-driven design system defined in `src/index.css`. Colors, gradients, borders and shadows are centralized to simplify future visual updates.

The UI was built to balance strong presentation with maintainability, avoiding overly coupled section logic and keeping the content layer separate from the rendering layer.

## Status

The current version is ready as a portfolio base and can be extended with:

- real project repository links
- deployment configuration
- analytics
- custom domain setup
- additional case study pages
