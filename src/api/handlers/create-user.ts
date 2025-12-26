import { RequestHandler } from 'express';

import { createUser } from 'src/db/queries';

export const userCreationHandler: RequestHandler = async (req, res) => {
  const { email } = req.body;

  const user = await createUser({ email });

  res.status(201).json(user);
};
