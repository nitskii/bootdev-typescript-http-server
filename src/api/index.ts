import { Router } from 'express';

import { chirpValidationHandler, readinessHandler } from 'src/api/handlers';

const apiRouter = Router();

apiRouter.get('/healthz', readinessHandler);
apiRouter.post('/validate_chirp', chirpValidationHandler);

export default apiRouter;
