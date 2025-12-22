import express from 'express';

import adminRouter from 'src/admin';
import apiRouter from 'src/api';
import { fileserverHitsCounter, responseLogger } from 'src/middleware';

const app = express();

app.use('/app', fileserverHitsCounter, express.static('app'));
app.use(responseLogger);
app.use(express.json());
app.use('/api', apiRouter);
app.use('/admin', adminRouter);

const port = parseInt(process.argv[2]) || 8080;

app.listen(
  port,
  () => console.log(`Started at http://localhost:${port}`)
);
