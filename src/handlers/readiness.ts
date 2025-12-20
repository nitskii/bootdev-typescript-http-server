import { RequestHandler } from 'express';

const readinessHandler: RequestHandler = (_, res) => {
  res.set('content-type', 'text/plain; charset=utf-8');
  res.send('OK');
};

export default readinessHandler;
