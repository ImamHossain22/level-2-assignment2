import {  BicycleModel } from "../bicycleStore.model";
import { Bicycles } from "./bicycleStore.interface";

const createBicycleDataIntoDB = async (bicycle: Bicycles) => {
    
    const result = await BicycleModel.create(bicycle);
    return result;
};


export const BicycleStoreServices = {
    createBicycleDataIntoDB,
}