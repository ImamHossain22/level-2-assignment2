import { BicycleRoutes } from './app/modules/store/bicycleStore.route';
import  express, { Application, Request, Response } from "express"
import cors from "cors";

const app: Application = express()

app.use(express.json());
app.use(cors());

app.use("/api/v1/bicycles", BicycleRoutes);

const getAController =  (req: Request, res: Response) => {
  res.send('i say Hello World!');
}


app.get('/',getAController );

export default app;