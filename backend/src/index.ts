import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { router as apiRouter } from './routes/api.js';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 4000;

app.use(morgan('dev'));
app.use(express.json());
app.use('/api', apiRouter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
