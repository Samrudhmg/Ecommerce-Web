import mongoose from 'mongoose'




export const connectDB=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017",{
        dbName:"Ecommerce_2024",
    }).then((res)=>console.log(`Db is connected to ${res.connection.host}`))
    .catch((error)=>console.log(error))
};