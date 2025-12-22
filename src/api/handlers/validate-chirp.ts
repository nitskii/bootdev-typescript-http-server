import { RequestHandler } from 'express';

export const chirpValidationHandler: RequestHandler = (req, res) => {
  const chirp = req.body;

  if (chirp.body.length > 140) {
    const error = JSON.stringify({ error: 'Chirp is too long' });
    res.status(400).send(error);
  } else {
    res.send(JSON.stringify({ valid: true }));
  }
};
