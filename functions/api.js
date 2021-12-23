import express from 'express';
import serverless from 'serverless-http';

const app = express();

const addressWithPrefix = (address) => '/.netlify/functions/api' + address;

app.get(addressWithPrefix('/'), (req, res) => {
  res.json({ jmenoMojiLasky: 'zanetka' });
});

export const handler = serverless(app);
