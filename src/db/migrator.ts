import { MigrationConfig } from 'drizzle-orm/migrator';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

import { config } from 'src/config';

export const runMigrations = async () => {
  const client = postgres(config.db.url, { max: 1 });
  const database = drizzle(client);
  const migrationConfig: MigrationConfig = {
    migrationsFolder: config.db.migrations.folder,
  }
  await migrate(database, migrationConfig);
};
