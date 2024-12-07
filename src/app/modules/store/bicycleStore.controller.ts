import { Request, Response } from "express";
import { BicycleStoreServices } from "./bicycleStore.service";


const createBicycleData = async (req: Request, res: Response) => {
    try {

        const { cycle: bicycleData } = req.body;
        
        const result = await BicycleStoreServices.createBicycleDataIntoDB(bicycleData);
        res.status(200).json({
            sucess: true,
            message: "Bicycle Data create sucessfully",
            data: result,
           
        });
    }
    catch (err) {
        console.log(err);
    }
    
};

const getAllCycles = async (req: Request, res: Response) => {
    try {
        const searchTerm = req.query.searchTerm as string;
        const result = await BicycleStoreServices.getAllCycleDataFromDB(searchTerm);
        res.status(200).json({
            success: true,
            message: "Bicycle store data retrive successfully",
            data: result,
           
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "An error occurred while retrieving bicycles",
        });
    }
};
const getSingleCycleData = async (req: Request, res: Response) => {
    try {
        const idOfData = req.params._id;

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
           
        });
    }catch (error) {
        console.log(error)
    }
};
const deleteCycleData = async (req: Request, res: Response) => {
    try {
        
        const deleteId = req.params._id;
        
       await BicycleStoreServices.deleteADataFromDB(deleteId);
        res.status(200).json({
            success: true,
            message: " Bicycle Data delete Successfully",
            data: {}
            
        });
    }catch (error) {
        console.log(error)
    }
};


export const BicycleStoreControllers = {
    createBicycleData,
    getAllCycles,
    getSingleCycleData,
    updateCycleData,
    deleteCycleData
};

