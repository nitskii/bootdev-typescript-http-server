import { RequestHandler } from 'express';

export const chirpValidationHandler: RequestHandler = async (req, res, next) => {
  const chirp = req.body;

  if (chirp.body.length > 140) {
    next(new Error('Chirp is too long'));
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
