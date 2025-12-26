import { Router } from 'express';

import {
  chirpValidationHandler,
  readinessHandler,
  userCreationHandler,
} from 'src/api/handlers';

const apiRouter = Router();

apiRouter.get('/healthz', readinessHandler);
apiRouter.post('/validate_chirp', chirpValidationHandler);
apiRouter.post('/users', userCreationHandler);

export default apiRouter;
