import express, {
    type Express
} from 'express';
import env from '../config/env.ts';

export const app: Express = express();
console.log(`Server is running on port ${env.PORT}`);
app.listen(env.PORT);
