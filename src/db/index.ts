import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { config } from 'src/config';
import * as schema from 'src/db/schema';

const conn = postgres(config.dbURL);
export const db = drizzle(conn, { schema });
