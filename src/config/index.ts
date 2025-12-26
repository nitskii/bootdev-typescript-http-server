import { APIConfig } from 'src/config/types';
import { envOrThrow } from 'src/util/helpers';

export const config: APIConfig = {
  fileserverHits: 0,
  dbURL: envOrThrow('DB_URL'),
};
