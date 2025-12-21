import { RequestHandler } from 'express';

import { config } from 'src/config';

const resetHandler: RequestHandler = (_, res) => {
  config.fileserverHits = 0;
  res.send();
};

export default resetHandler;
