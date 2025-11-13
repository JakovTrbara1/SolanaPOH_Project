# PoH Visualizer Backend

Lightweight Express server written in TypeScript. It will eventually broker Solana RPC data for the Angular frontend.

## Scripts

- `npm run dev` – Start the server with live reload via `tsx`.
- `npm run build` – Compile TypeScript to `dist/`.
- `npm start` – Run the compiled JavaScript output.

## API Surface

- `GET /api/health` – Basic heartbeat endpoint.
- `GET /api/slots/latest` – Returns the latest Solana slot and leader validator using the configured RPC endpoint.

Configure the RPC endpoint with the `SOLANA_RPC_URL` environment variable.
