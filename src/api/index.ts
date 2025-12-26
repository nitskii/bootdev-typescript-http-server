import { Router } from 'express';

import {
  chirpCreationHandler,
  chirpRetrievalByIdHandler,
  chirpsRetrievalHandler,
  readinessHandler,
  userCreationHandler,
} from 'src/api/handlers';

const apiRouter = Router();

apiRouter.get('/healthz', readinessHandler);
apiRouter.post('/users', userCreationHandler);
apiRouter.post('/chirps', chirpCreationHandler);
apiRouter.get('/chirps', chirpsRetrievalHandler);
apiRouter.get('/chirps/:id', chirpRetrievalByIdHandler);

export default apiRouter;
