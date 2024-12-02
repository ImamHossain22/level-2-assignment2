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
    } catch (err : any) {
        res.status(400).json({
            success: false,
            message: err.message || "Error occurred",
        });
    }
};


export const BicycleOrderControllers = {
    createOrderData,
}