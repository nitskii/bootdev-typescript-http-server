import { Router } from 'express';

import { metricsHandler, resetHandler } from 'src/admin/handlers';

const adminRouter = Router();

adminRouter.get('/metrics', metricsHandler);
adminRouter.get('/reset', resetHandler);

export default adminRouter;
