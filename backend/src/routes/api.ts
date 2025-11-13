import { Router, type ErrorRequestHandler } from 'express';
import { getLatestSlotSummary } from '../services/solana.service.js';

export const router = Router();

router.get('/slots/latest', async (_req, res, next) => {
  try {
    const summary = await getLatestSlotSummary();
    res.json(summary);
  } catch (error) {
    next(error);
  }
});

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof Error) {
    res.status(500).json({ message: error.message });
    return;
  }

  res.status(500).json({ message: 'Unexpected error' });
};

router.use(errorHandler);
