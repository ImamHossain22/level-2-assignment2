import express from "express";
import { BicycleStoreControllers } from "./bicycleStore.controller";

const router = express.Router();

router.post('/create-bicycle', BicycleStoreControllers.createBicycleData);

router.get('/', BicycleStoreControllers.getAllCycles);

router.get('/:productID', BicycleStoreControllers.getSingleCycleData);

export const BicycleRoutes = router;