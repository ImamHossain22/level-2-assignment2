import { BicycleRoutes } from './app/modules/store/bicycleStore.route';
import  express, { Application, Request, Response } from "express"
import cors from "cors";
import { OrderRoutes } from './app/modules/order/bicycleOrder.route';

const app: Application = express()

app.use(express.json());
app.use(cors());

app.use("/api/products/bicycles", BicycleRoutes);
app.use("/api/products/orders", OrderRoutes);

const getAController =  (req: Request, res: Response) => {
  res.send('I say Hello World!!');
}


app.get('/',getAController );

export default app;