import express from "express";
import { BicycleStoreControllers } from "./bicycleStore.controller";

const router = express.Router();

router.post('/create-bicycle', BicycleStoreControllers.createBicycleData);

router.get('/', BicycleStoreControllers.getAllCycles);

router.get('/:productId', BicycleStoreControllers.getSingleCycleData);

router.put('/:productId', BicycleStoreControllers.updateCycleData);

router.delete('/:productId', BicycleStoreControllers.deleteCycleData);

export const BicycleRoutes = router;