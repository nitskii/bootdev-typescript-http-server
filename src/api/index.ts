import { Router } from 'express';

import { metricsHandler, readinessHandler, resetHandler } from 'src/api/handlers';

const apiRouter = Router();

apiRouter.get('/healthz', readinessHandler);
apiRouter.get('/metrics', metricsHandler);
apiRouter.get('/reset', resetHandler);

export default apiRouter;
