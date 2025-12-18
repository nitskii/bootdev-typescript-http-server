import express, { type Response } from 'express';

const app = express();

app.use('/app', express.static('app'));

app.get('/healthz', (_, res: Response) => {
  res.set('content-type', 'text/plain; charset=utf-8');
  res.send('OK');
});

const port = parseInt(process.argv[2]) || 8080;

app.listen(
  port,
  () => console.log(`Started at http://localhost:${port}`)
);
