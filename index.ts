import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {routes} from './routes/routes';
dotenv.config();


const app: Express = express();
const port = process.env.PORT;

app.use("/", routes);

app.get('/', (req: Request, res: Response) => {
  res.send('hello world!');
});


//dev
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

