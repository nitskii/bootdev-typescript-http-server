import { Router } from 'express';

import {
  chirpCreationHandler,
  readinessHandler,
  userCreationHandler,
} from 'src/api/handlers';

const apiRouter = Router();

apiRouter.get('/healthz', readinessHandler);
apiRouter.post('/users', userCreationHandler);
apiRouter.post('/chirps', chirpCreationHandler);

export default apiRouter;
