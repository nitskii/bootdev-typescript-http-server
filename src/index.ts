import express from 'express';

const app = express();

app.use(express.static('.'));

const port = parseInt(process.argv[2]) || 8080;

app.listen(
  port,
  () => console.log(`Started at http://localhost:${port}`)
);
