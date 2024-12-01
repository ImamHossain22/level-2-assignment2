import mongoose from "mongoose";

export type Orders = {
    email: string,
    productId:string,
    quantity: number,
    totalPrice: number,
};