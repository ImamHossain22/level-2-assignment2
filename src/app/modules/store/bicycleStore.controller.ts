import { Request, Response } from "express";
import { BicycleStoreServices } from "./bicycleStore.service";
import { timeStamp } from "console";

const createBicycleData = async (req: Request, res: Response) => {
    try {

        const{cycle: bicycleData} = req.body;
        const result = await BicycleStoreServices.createBicycleDataIntoDB(bicycleData);
        res.status(200).json({
            sucess: true,
            message: "Bicycle Data create sucessfully",
            data: result,
           createdAt: new Date()
        });
    }
    catch (err) {
        console.log(err);
    }
    
};

const getAllCycles = async (req: Request, res: Response) => {
    try {
        const result = await BicycleStoreServices.getAllCycleDataFromDB();
        res.status(200).json({
            success: true,
            message: "Bicycle store data retrive successfully",
            data: result,
            getDataAt: new Date()
        });
    }
    catch (error) {
        console.log(error);
    }
};
const getSingleCycleData = async (req: Request, res: Response) => {
    try {
        const idOfData = req.params.productID;

        const result = await BicycleStoreServices.getSingleCycleDataFromDB(idOfData);
        res.status(200).json({
            success: true,
            message: "A bicycle data retrive successfully",
            data: result,
            
        });
    }
    catch (error) {
        console.log(error);
    }
};


const updateCycleData = async (req: Request, res: Response) => {
    try {
        
        const updateId = req.params._id;
        const updatedetails = req.body;
        const result = await BicycleStoreServices.updateADataFromDB(updateId, updatedetails);
        res.status(200).json({
            success: true,
            message: " Bicycle Data Update Successfully",
            data: result,
            updatedAt: new Date()
        });
    }catch (error) {
        console.log(error)
    }
};


export const BicycleStoreControllers = {
    createBicycleData,
    getAllCycles,
    getSingleCycleData,
    updateCycleData
};

