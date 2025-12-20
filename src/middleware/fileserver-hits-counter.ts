import { RequestHandler } from 'express';

import { config } from 'src/config';

const fileserverHitsCounter: RequestHandler = (req, res, next) => {
  ++config.fileserverHits;
  next();
};

export default fileserverHitsCounter;
