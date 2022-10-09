import express, {Request, Response} from "express";
import * as controller from "../controllers/controller";

export const routes = express.Router();

routes.get('/getuser', async (req: Request, res: Response) => {
    const user = await controller.getUser();
    res.send(user);
});

routes.post('/add', async (req: Request, res: Response) => {
   const username: string = String(req.query.username || "");
    const rex = await controller.addUser(username);
    res.send(rex);
});

//here we have some basics api endpoints