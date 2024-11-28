import express from "express";
import { BicycleStoreControllers } from "./bicycleStore.controller";

const router = express.Router();

router.post('/create-bicycle', BicycleStoreControllers.createBicycleData);

export const BicycleRoutes = router;