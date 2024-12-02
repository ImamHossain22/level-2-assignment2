import { OrderModel } from "../bicycleOrder.model";
import { BicycleModel } from "../bicycleStore.model";
import { Orders } from "./bicyleOrder.interface";


const createOrderCycleDataIntoDB = async (order: Orders) => {
    
    const { productId, quantity } = order;
    const bicycle = await BicycleModel.findById(productId);

    if (!bicycle) {
        throw new Error("Bicycle not found.");
    }

    if (bicycle.quantity < quantity) {
        throw new Error("Insufficient stock available.");
    }

    bicycle.quantity -= quantity;
    if (bicycle.quantity === 0) {
        bicycle.inStock = false;
    }
    await bicycle.save();

    const result = await OrderModel.create(order);
    return result;
};

export const OrderServices = {
    createOrderCycleDataIntoDB,
}