import { OrderModel } from "../bicycleOrder.model";
import { Orders } from "./bicyleOrder.interface";


const createOrderCycleDataIntoDB = async (order: Orders) => {
    
    const result = await OrderModel.create(order);
    return result;
};

export const OrderServices = {
    createOrderCycleDataIntoDB,
}