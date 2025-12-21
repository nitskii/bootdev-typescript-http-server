import { RequestHandler } from 'express';

import { config } from 'src/config';

const metricsHandler: RequestHandler = (_, res) => {
  res.send(`Hits: ${config.fileserverHits}`);
};

export default metricsHandler;
