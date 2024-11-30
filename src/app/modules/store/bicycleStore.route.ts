import express from "express";
import { BicycleStoreControllers } from "./bicycleStore.controller";

const router = express.Router();

router.post('/create-bicycle', BicycleStoreControllers.createBicycleData);

router.get('/', BicycleStoreControllers.getAllCycles);

router.get('/:_id', BicycleStoreControllers.getSingleCycleData);

router.put('/:_id', BicycleStoreControllers.updateCycleData);

router.delete('/:_id', BicycleStoreControllers.deleteCycleData);

export const BicycleRoutes = router;