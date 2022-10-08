import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import calcArea from "./functions";

dotenv.config();



const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('hello world!');
});

app.get('/ciao', (req: Request, res: Response) => {
  const x: number = Number(req.query.x) || 0;
  const y: number = Number(req.query.y) || 0;
  res.send(calcArea(x, y).toString());
});




//dev
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});