import { ErrorRequestHandler } from 'express';

import { BadRequestError } from 'src/errors';

export const errorHandler: ErrorRequestHandler = (err, _, res, next) => {
  console.error(err);

  if (err instanceof BadRequestError) {
    res.status(400).json({ error: err.message });
  } else {
    res
      .status(500)
      .json({ error: 'Something went wrong on our end' });
  }
};
