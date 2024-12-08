import { Request, Response } from "express";
import { OrderServices } from "./bicycleOrder.service";

const createOrderData = async (req: Request, res: Response) => {
    try {
        const { user: orderUser } = req.body;
        const result = await OrderServices.createOrderCycleDataIntoDB(orderUser);

        res.status(200).json({
            success: true,
            message: "create an order successfully",
            data: result
        });
    } catch (err : any) {
        res.status(400).json({
            success: false,
            message: err.message || "Error occurred",
        });
    }
};


const createRevenue = async (req: Request, res: Response) => {
    try {
        const revenue = await OrderServices.calculateRevenue();
        res.status(200).json({
            success: true,
            message: "Revenue calculated successfully",
            data: { totalRevenue: revenue },
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Error calculating revenue",
        });
    }
};


export const BicycleOrderControllers = {
    createOrderData,
    createRevenue
}