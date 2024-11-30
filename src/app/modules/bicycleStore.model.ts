import { Schema, model } from 'mongoose';
import { Bicycles } from './store/bicycleStore.interface';

const bicycleShema = new Schema<Bicycles>({
    productID: { type: String, },
    profileImg: { type: String, },
    name: { type: String, },
    brand: { type: String, },
    price: { type: String, },
    type: ["Mountain", "Road", "Hybrid", "BMX", "Electric"],
    description: { type: String },
    
    quantity: { type: String },
    
    inStock: { type: Boolean }, 
},
{ timestamps: true }
);

export const BicycleModel = model<Bicycles>("Bicycle", bicycleShema)
