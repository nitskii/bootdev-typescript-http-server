import { APIConfig } from 'src/config/types';
import { envOrThrow } from 'src/util/helpers';

export const config: APIConfig = {
  fileserverHits: 0,
  db: {
    url: envOrThrow('DB_URL'),
    migrations: {
      folder: 'src/db/migrations',
    },
  },
};
