import { Request, Response } from "express";
import { OrderServices } from "./bicycleOrder.service";

const createOrderData = async (req: Request, res: Response) => {
    try {
        const { user: orderUser } = req.body;
        const result = await OrderServices.createOrderCycleDataIntoDB(orderUser);

        res.status(200).json({
            success: true,
            message: "create a order successfully",
            data: result
        });
    } catch (err) {
        console.log(err);
    }
};


// const calculateRevenue = async (req: Request, res: Response) => {
    
// }

export const BicycleOrderControllers = {
    createOrderData,
}