import { Request, Response } from "express";
import { BicycleStoreServices } from "./bicycleStore.service";

const createBicycleData = async (req: Request, res: Response) => {
    try {
        const bicycleData = req.body.cycle;

        const result = await BicycleStoreServices.createBicycleDataIntoDB(bicycleData);
        res.status(200).json({
            sucess: true,
            message: "Bicycle Data create sucessfully",
            data: result,
           createdAt: new Date()
        });
    }
    catch (err) {
        console.log(err);
    }
    
};

export const BicycleStoreControllers = {
    createBicycleData
};

