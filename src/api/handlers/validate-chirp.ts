import { RequestHandler } from 'express';

export const chirpValidationHandler: RequestHandler = (req, res) => {
  const chirp = req.body;

  if (chirp.body.length > 140) {
    const error = JSON.stringify({ error: 'Chirp is too long' });
    res.status(400).send(error);
    return;
  }

  const cleanedBody = cleanBody(chirp.body);

  res.send(JSON.stringify({ cleanedBody }));
};

const cleanBody = (body: string): string => {
  return body
    .split(' ')
    .map(maskProfaneWord)
    .join(' ');
};

const PROFANE_WORDS = [
  'kerfuffle',
  'sharbert',
  'fornax',
];

const maskProfaneWord = (word: string): string => {
  if (PROFANE_WORDS.includes(word.toLowerCase())) {
    return '****';
  }

  return word;
};
