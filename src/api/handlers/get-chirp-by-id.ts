import { RequestHandler } from 'express';

import { getChirpById } from 'src/db/queries';
import { NotFoundError } from 'src/errors/not-found-error';

const chirpRetrievalByIdHandler: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  const chirp = await getChirpById(id);

  if (!chirp) {
    next(new NotFoundError(`Chirp with id ${id} not found`));
  } else {
    res.json(chirp);
  }
};

export default chirpRetrievalByIdHandler;
