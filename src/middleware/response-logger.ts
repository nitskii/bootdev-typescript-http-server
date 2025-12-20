import { Middleware } from './types.js';

const responseLogger: Middleware = (req, res, next): void => {
  res.on('finish', () => {
    const message =
      (res.statusCode >= 300 ? '[NON-OK] ' : '') +
      `${req.method} ${req.url} ` +
      `- Status: ${res.statusCode}`;

    console.log(message);
  });
  next();
};

export default responseLogger;
