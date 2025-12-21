import { RequestHandler } from 'express';

import { config } from 'src/config';

const metricsHandler: RequestHandler = (_, res) => {
  res.set('content-type', 'text/html; charset=utf-8');
  const html = `<html>
  <body>
    <h1>Welcome, Chirpy Admin</h1>
    <p>Chirpy has been visited ${config.fileserverHits} times!</p>
  </body>
</html>`;

  res.send(html);
};

export default metricsHandler;
