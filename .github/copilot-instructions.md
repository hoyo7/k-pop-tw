<!-- Copilot / AI agent guidance for contributors in this repository -->
# Copilot instructions (project-specific)

Purpose
- Short, actionable guidance for an AI coding agent to be productive in this repo.

Quick start
- Node: enforced in `package.json` via `engines.node` (>= 18).
- Install: `npm install`.
- Dev server (HMR): `npm run dev` (Vite, default port 5173).
- Build: `npm run build` → `dist` (used by Azure Static Web Apps workflow).
- Preview build: `npm run preview`.
- Lint: `npm run lint` (see `eslint.config.js`).

Big picture
- Single-page React app built with Vite + Tailwind. The entire UI lives in `src/` and mounts at the `#root` element in `index.html`.
- No backend is present by default — client-only behavior is used for features like the subscription form (see `src/App.jsx`).
- Deployed via GitHub Actions → Azure Static Web Apps; the workflow files are under `.github/workflows/azure-static-web-apps-*.yml`. The workflow expects the static output in `dist`.

Essential files & patterns
- `src/App.jsx`: main landing page and largest component. Contains the countdown `useEffect` and a client-only subscription form (`onSubmit={handleSubscribe}` that calls `alert()`). Prefer extracting logic into small components or utilities when adding complexity.
- `src/main.jsx`: app entry (React StrictMode + root render).
- `index.html`: mount point and Vite entry script.
- `tailwind.config.js`: adds a `blob` animation used throughout; use `animate-blob` classes.
- `eslint.config.js`: custom lint config — `no-unused-vars` ignores identifiers matching `^[A-Z_]` (useful for components/constants).
- `package.json`: scripts (`dev`, `build`, `preview`, `lint`) and `engines.node` requirement.

Conventions & expectations (project-specific)
- UI styling: favor Tailwind utility classes inline in JSX; add small helper CSS only in `src/App.css` / `src/index.css` when necessary.
- Components: keep `.jsx` components small; extract repeating UI patterns into components under `src/`.
- Dependencies: keep minimal; icons use `lucide-react`.
- Tests: there are no tests yet. If adding tests, add an `npm test` script and document how to run them in the README.

Developer workflows & checks
- Dev: `npm run dev` to iterate locally (HMR). Check browser console for runtime warnings.
- Lint: `npm run lint` (fix issues before PRs).
- Build: `npm run build` to validate production output. Open `npm run preview` to smoke-test the build.
- CI: PRs to `main` run the Azure Static Web Apps workflow. Ensure `npm run build` succeeds and lint passes locally before opening PRs.

Adding a backend/API
- If you add server code, create an `api/` directory and update `api_location` in the Azure workflow(s) under `.github/workflows/`. Follow Azure Static Web Apps or Azure Functions conventions depending on runtime.

PR checklist for agents
- Run `npm run lint` and fix reported issues.
- Run `npm run build` and `npm run preview` to ensure the site renders and assets are correct.
- Verify no console errors in the browser during `dev` and `preview`.
- If changing deployment shape (adding APIs, changing output), update `.github/workflows/azure-static-web-apps-*.yml` and mention required secret changes in PR body.

Examples & quick references
- Countdown logic: `src/App.jsx` (useEffect-based time calculation).
- Subscription mock: `src/App.jsx` form handler (replace `alert()` with network call when wiring to backend).
- Tailwind blob animation: `tailwind.config.js` → use `animate-blob`.

Questions / contact
- Project contact: `hello@k-pop.tw` (also in the app footer).

If anything above is unclear or you want a deeper walkthrough of a specific file, point to it and I will expand this doc with examples.
