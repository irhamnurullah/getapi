// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'HEAD'],
});

export default async function handler(req, res) {
  await cors(req, res);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  res.status(200).json({ name: 'John Doe' });
}
