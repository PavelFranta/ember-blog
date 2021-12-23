import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('*', (req, res) => {
  console.log(req.body);
  res.json({ jmenoMojiLasky: 'create' });
});

export const handler = serverless(app);
