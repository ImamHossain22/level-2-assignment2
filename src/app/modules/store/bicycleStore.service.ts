

import {  BicycleModel } from "../bicycleStore.model";
import { Bicycles } from "./bicycleStore.interface";

const createBicycleDataIntoDB = async (bicycle: Bicycles) => {
    
    const result = await BicycleModel.create(bicycle);
    return result;
};

const getAllCycleDataFromDB = async (searchTerm?: string) => {
    const filter = searchTerm
    ? {
          $or: [
              { name: { $regex: searchTerm, $options: "i" } },
              { brand: { $regex: searchTerm, $options: "i" } },
              { type: { $regex: searchTerm, $options: "i" } },
          ],
      }
    : {};
    const result = await BicycleModel.find(filter);
    return result;
}

const getSingleCycleDataFromDB = async (productId: string) => {
    const result = await BicycleModel.findOne({productId});
    return result;
}

const updateADataFromDB = async (productId: string, data: Bicycles) => {
    
    const result = await BicycleModel.findByIdAndUpdate(productId, data,{new: true})
    return result;
}
const deleteADataFromDB = async (productId: string) => {
    
    const result = await BicycleModel.findByIdAndUpdate(productId)
    return result;
}


export const BicycleStoreServices = {
    createBicycleDataIntoDB,
    getAllCycleDataFromDB,
    getSingleCycleDataFromDB,
    updateADataFromDB,
    deleteADataFromDB
}