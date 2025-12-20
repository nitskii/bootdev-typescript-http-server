import express from 'express';

import { metricsHandler, readinessHandler, resetHandler } from 'src/handlers';
import { fileserverHitsCounter, responseLogger } from 'src/middleware';

const app = express();

app.use('/app', fileserverHitsCounter, express.static('app'));
app.use(responseLogger);

app.get('/healthz', readinessHandler);
app.get('/metrics', metricsHandler);
app.get('/reset', resetHandler);

const port = parseInt(process.argv[2]) || 8080;

app.listen(
  port,
  () => console.log(`Started at http://localhost:${port}`)
);
