
import { Request, Response } from "express";
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

const getSingleCycleDataFromDB = async (_id: string) => {
    const result = await BicycleModel.findOne({_id});
    return result;
}

const updateADataFromDB = async (_id: string, data: Bicycles) => {
    
    const result = await BicycleModel.findByIdAndUpdate(_id, data,{new: true})
    return result;
}
const deleteADataFromDB = async (_id: string) => {
    
    const result = await BicycleModel.findByIdAndUpdate(_id)
    return result;
}


export const BicycleStoreServices = {
    createBicycleDataIntoDB,
    getAllCycleDataFromDB,
    getSingleCycleDataFromDB,
    updateADataFromDB,
    deleteADataFromDB
}