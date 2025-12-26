import { eq } from 'drizzle-orm';

import { db } from 'src/db';
import { chirps, NewChirp, NewUser, users } from 'src/db/schema';

export const createUser = async (user: NewUser) => {
  const [result] = await db
    .insert(users)
    .values(user)
    .onConflictDoNothing()
    .returning();

  return result;
};

export const deleteUsers = async () => {
  await db.delete(users);
};

export const createChirp = async (chirp: NewChirp) => {
  const [result] = await db
    .insert(chirps)
    .values(chirp)
    .returning();

  return result;
};

export const getChirps = async () => {
  return db.select().from(chirps);
};

export const getChirpById = async (id: string) => {
  const [result] = await db
    .select()
    .from(chirps)
    .where(eq(chirps.id, id))
    .limit(1);

  return result;
};
