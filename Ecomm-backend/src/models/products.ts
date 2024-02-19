import mongoose from "mongoose";



const schema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, " please Enter a Name"]
        },
        photo:{
            type:String,
            required:[true, " please upload a photo"]
        },
        price:{
            type:Number,
            required:[true, " please enter the price"]
        },
        stock:{
            type:Number,
            required:[true, " please enter the stock"]
        },
        category:{
            type:String,
            required:[true, " please enter the category"],
            trim:true,
        },
    },
    {
        timestamps:true,

    }

);

export const Product=mongoose.model("Product",schema)