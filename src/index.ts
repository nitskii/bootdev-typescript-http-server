import express from 'express';

const app = express();

const port = parseInt(process.argv[2]) || 8080;

app.listen(
  port,
  () => console.log(`Started at http://localhost:${port}`)
);
