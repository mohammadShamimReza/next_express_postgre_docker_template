import cors from 'cors';
import { app } from './server.ts';

import express, { Router, type Request, type Response } from 'express';
import helmet from 'helmet';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(Router({ caseSensitive: true, strict: true }));
app.use(helmet());

app.get('/routes', (req: Request, res: Response) => {
  res.status(200).json({
    routes: ['/user'],
  });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello shamim!!');
});

