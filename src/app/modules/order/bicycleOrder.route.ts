import express from 'express';
import { BicycleOrderControllers } from './bicycleOrder.controller';


const router = express.Router();

router.post('/create-order', BicycleOrderControllers.createOrderData);


export const OrderRoutes = router;