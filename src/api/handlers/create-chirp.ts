import { RequestHandler } from 'express';

import { createChirp } from 'src/db/queries';
import { BadRequestError } from 'src/errors';

export const chirpCreationHandler: RequestHandler = async (req, res, next) => {
  const { body, userId } = req.body;

  if (body.length > 140) {
    next(new BadRequestError('Chirp is too long. Max length is 140'));
    return;
  }
  
  const cleanedBody = cleanBody(body);

  const chirp = await createChirp({
    body: cleanedBody,
    userId,
  });

  res.status(201).json(chirp);
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
