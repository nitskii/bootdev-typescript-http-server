import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, _, res, next) => {
  console.error(err);

  res
    .status(500)
    .json({ error: 'Something went wrong on our end' });
};
