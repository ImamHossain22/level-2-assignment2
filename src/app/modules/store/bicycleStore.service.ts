
import {  BicycleModel } from "../bicycleStore.model";
import { Bicycles } from "./bicycleStore.interface";

const createBicycleDataIntoDB = async (bicycle: Bicycles) => {
    
    const result = await BicycleModel.create(bicycle);
    return result;
};

const getAllCycleDataFromDB = async ()=>{
    const result = await BicycleModel.find();
    return result;
}

const getSingleCycleDataFromDB = async (productID: string) => {
    const result = await BicycleModel.findOne({productID});
    return result;
}


export const BicycleStoreServices = {
    createBicycleDataIntoDB,
    getAllCycleDataFromDB,
    getSingleCycleDataFromDB
}