process.loadEnvFile();

export const envOrThrow = (key: string): string => {
  const value = process.env[key];

  if (value === undefined) {
    throw new Error('Variable not found');
  }

  return value;
};
