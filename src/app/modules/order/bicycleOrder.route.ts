import express from 'express';
import { BicycleOrderControllers } from './bicycleOrder.controller';


const router = express.Router();

router.post('/create-order', BicycleOrderControllers.createOrderData);

router.get('/revenue', BicycleOrderControllers.createRevenue);



export const OrderRoutes = router;