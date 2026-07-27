# Kareem Nasr — Portfolio

Personal portfolio built with React 19, TypeScript (strict), Vite, React Router,
Tailwind CSS v4 and Framer Motion.

## Scripts

```bash
npm run dev       # start the dev server
npm run build     # type-check + production build
npm run lint      # eslint
npm run preview   # serve the production build locally
```

## Where content lives

All copy, links and project data are typed config files — no content is
hardcoded in page components:

| File | Contains |
| --- | --- |
| `src/data/site.ts` | Name, title, description, email, social URLs, CV URL, nav items, rotating headlines |
| `src/data/experience.ts` | Experience timeline entries |
| `src/data/projects.ts` | Project cards (links render only when configured) |
| `src/data/technologies.ts` | Floating tech-frame logos and their motion placements |

## Things to configure

- **CV**: drop a PDF into `public/` and set `cvUrl` in `src/data/site.ts`
  (e.g. `'/kareem-nasr-cv.pdf'`). The Download CV button appears automatically.
- **Profile URLs**: confirm `linkedinUrl` / `githubUrl` in `src/data/site.ts`.
- **Contact form**: create a Formspree form and set `FORM_ENDPOINT` in
  `src/lib/contact.ts`. Until then the form validates but honestly reports
  that submission is not configured.
- **Portrait**: replace `src/assets/ChatGPT Image Jul 27, 2026, 03_58_17 PM.png`
  (imported in `src/components/home/Portrait.tsx`).
- **Project screenshots**: set `image` on entries in `src/data/projects.ts` to
  replace the styled placeholders.

## Structure

```
src/
  components/   layout, navigation, home, experience, projects, contact, ui
  data/         typed content/config
  hooks/        useRotatingIndex, usePointerGlow, usePageTitle
  lib/          shared animation constants, contact form abstraction
  pages/        one component per route (all but Home are lazy-loaded)
  routes/       router definition
  types/        shared content types
```
