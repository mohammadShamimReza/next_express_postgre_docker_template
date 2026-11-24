import cors from 'cors';
import express, {
  Router,
  type Express,
  type Request,
  type Response,
} from 'express';

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(Router({ caseSensitive: true, strict: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello shamim!!');
});

app.listen(5000);
