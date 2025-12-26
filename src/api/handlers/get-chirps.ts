import { RequestHandler } from 'express';

import { getChirps } from 'src/db/queries';

const chirpsRetrievalHandler: RequestHandler = async (_, res) => {
  const chirps = await getChirps();

  res.json(chirps);
};

export default chirpsRetrievalHandler;
