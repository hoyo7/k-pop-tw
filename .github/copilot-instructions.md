<!-- Copilot / AI agent guidance for contributors in this repository -->
# Copilot instructions (project-specific)

Purpose
- Short, actionable guidance for an AI coding agent to be productive in this repo.

Quick start
- Node: engines in package.json require Node >= 18.
- Install: `npm install`.
- Dev server: `npm run dev` (Vite HMR).
- Build: `npm run build` produces `dist` (used by Azure Static Web Apps workflow).
- Preview build: `npm run preview`.
- Lint: `npm run lint` (see `eslint.config.js`).

Big picture
- Single-page React app (Vite + Tailwind). UI lives entirely in `src/` and mounts at the `#root` div in `index.html`.
- No backend/APIs in the repo (see workflow: `api_location` is empty). The subscription form in `src/App.jsx` is currently client-only and uses `alert()` — not wired to a server.
- Deployed via Azure Static Web Apps using `.github/workflows/azure-static-web-apps-*.yml`. The workflow expects the built site in `dist`.

Key files & patterns (refer to these when making edits)
- `src/App.jsx`: main landing page and the single largest component. Examples:
  - groups grid uses Tailwind gradients (`from-blue-200 to-pink-200`) and inline JSX patterns.
  - Countdown logic is implemented with a `useEffect` that computes remaining time — move to an API or utility if you need persistence or server-sent reminders.
- `src/main.jsx`: app entry point (StrictMode + root render).
- `index.html`: root mounting point and Vite entry script.
- `tailwind.config.js`: small extension for a `blob` animation used throughout the UI.
- `eslint.config.js`: lint rules; note `no-unused-vars` ignores names matching `^[A-Z_]` (helps with constants/components).
- `.github/workflows/azure-static-web-apps-*.yml`: CI/CD; update `app_location`/`api_location`/`output_location` if you introduce APIs or change build outputs.

Conventions & expectations
- Use Tailwind utility classes inline in JSX rather than adding many global styles. Small helper CSS is okay in `src/App.css` / `src/index.css`.
- File extensions are `.jsx` (no TypeScript at present). Keep components small and extract repeating patterns to new components under `src/`.
- Keep external dependencies minimal. Icons use `lucide-react` (already in package.json).

CI / Deploy notes
- PRs targeting `main` trigger the Azure Static Web Apps workflow. Ensure changes build cleanly (`npm run build`) and pass linting locally before opening a PR.
- The workflow uses a repo secret `AZURE_STATIC_WEB_APPS_API_TOKEN_*` — coordinate with maintainers to add/change secrets if you change deployment.

If you add an API
- Add an `api/` directory and set the `api_location` in the workflow. Follow Azure Functions or Static Web Apps conventions depending on the runtime you choose.

Testing & quality
- There are no existing unit/integration tests. If you add tests, include `npm test` script and document how to run them in this repository README.

Examples from the codebase (copyable patterns)
- Small client-only subscription handler:
  - `src/App.jsx` form uses `onSubmit={handleSubscribe}` and a simple `alert()` mock — replace with a network call when adding a backend.
- Tailwind animation example: defined in `tailwind.config.js` as `blob` then used via `animate-blob` utility classes in `src/App.jsx`.

PR checklist for agents
- Run `npm run lint` and fix issues.
- Run `npm run build` to verify no build regressions.
- If changing deployment shape, update `.github/workflows/azure-static-web-apps-*.yml` and mention required secret changes in the PR body.

Questions / contact
- Project contact appears in the app footer (`hello@k-pop.tw`) for maintainers.

If anything above is unclear or missing, ask for the specific file or workflow you'd like clarified.
