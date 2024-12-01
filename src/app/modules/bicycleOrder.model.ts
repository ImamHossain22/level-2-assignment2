import { Bicycles } from './store/bicycleStore.interface';
import mongoose, { Schema, model } from 'mongoose';
import { Orders } from './order/bicyleOrder.interface';

const orderSchema = new Schema<Orders>({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    quantity: { type: Number,required:true },
    totalPrice: { type: Number ,required:true},
},
{timestamps: true },
);

export const OrderModel = model<Orders>('Order', orderSchema);