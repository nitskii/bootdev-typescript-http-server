import { Router } from 'express';

import { readinessHandler } from 'src/api/handlers';

const apiRouter = Router();

apiRouter.get('/healthz', readinessHandler);

export default apiRouter;
