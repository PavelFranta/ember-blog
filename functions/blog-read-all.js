import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('*', (req, res) => {
  res.json({ jmenoMojiLasky: 'zanetka' });
});

export const handler = serverless(app);
