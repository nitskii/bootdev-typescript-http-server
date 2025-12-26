export type MigrationsConfig = {
  folder: string;
};

export type DBConfig = {
  url: string;
  migrations: MigrationsConfig;
};
