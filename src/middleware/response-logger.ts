import { RequestHandler } from 'express';

const responseLogger: RequestHandler = (req, res, next) => {
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
