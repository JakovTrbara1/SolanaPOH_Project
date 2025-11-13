# Solana Proof of History Visualizer

This project aims to teach Solana's Proof of History (PoH) through the train-and-stations analogy.

## Repository Layout

- `frontend/` – Angular 17 workspace styled with Bootstrap 5. Currently contains a placeholder landing page to confirm the toolchain boots up.
- `backend/` – Minimal Express server written in TypeScript. Exposes a starter `/api/health` route and a `/api/slots/latest` endpoint that will later power the visualization with real network data.

## Getting Started

Follow these steps to keep the project completely isolated from other work on your machine.

1. **Create a sandbox folder** away from existing client projects and clone the repository into it:
   ```bash
   mkdir -p ~/sandbox && cd ~/sandbox
   git clone <your-fork-or-this-repo-url> solana-poh-visualizer
   cd solana-poh-visualizer
   ```
2. **Check out the long-lived testing branch** so experimentation never touches `main`:
   ```bash
   git checkout testing
   ```
3. **Activate an isolated Node.js runtime** (recommended Node 20 LTS) using a version manager such as `nvm`:
   ```bash
   nvm install 20
   nvm use 20
   ```
   > If you are on Windows without WSL, use `nvs` or `fnm` to achieve the same effect.
4. **Install dependencies per workspace**—each has its own `node_modules` directory, keeping packages scoped locally:
   ```bash
   cd frontend
   npm install

   cd ../backend
   npm install
   ```
5. **Configure environment variables (optional)** by copying the provided example file:
   ```bash
   cd backend
   cp .env.example .env
   # edit .env if you want a custom SOLANA_RPC_URL or PORT
   ```
6. **Run the backend** in one terminal tab/window:
   ```bash
   cd backend
   npm run dev
   ```
7. **Launch the Angular frontend** in a separate terminal while the backend keeps running:
   ```bash
   cd frontend
   npm start
   ```
8. When finished, **deactivate the Node version** to return your shell to its default toolchain:
   ```bash
   nvm deactivate
   ```

## Environment Variables

The backend accepts the following variables:

- `PORT` – Port for the Express server (defaults to `4000`).
- `SOLANA_RPC_URL` – Custom Solana JSON-RPC endpoint (defaults to `https://api.mainnet-beta.solana.com`).

## Branching Strategy

All exploratory work happens on the `testing` branch. Stable features are merged into `main` once validated.

If you ever find that only `main` exists locally (for example after cloning fresh or cleaning up old branches), recreate the
long-lived `testing` branch with:

```bash
git checkout main
git checkout -b testing
git push -u origin testing  # optional, publish the branch if your fork needs it remotely
```

This keeps your workflow aligned with the project plan without touching the production-ready `main` history.
