import { RequestHandler } from 'express';

import { config } from 'src/config';
import { deleteUsers } from 'src/db/queries';
import { envOrThrow } from 'src/util/helpers';

const resetHandler: RequestHandler = async (_, res) => {
  const platform = envOrThrow('PLATFORM');

  if (platform !== 'dev') {
    res
      .status(403)
      .json({ error: 'This endpoint can only be used during development' });
  } else {
    config.fileserverHits = 0;
    await deleteUsers();
    res.send();
  }
};

export default resetHandler;
