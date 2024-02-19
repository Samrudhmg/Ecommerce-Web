import { Request } from "express";
import { Trycatch } from "../middlewares/error.js";
import { BaseQuery, NewProductRequestBody, SearchRequestQuery } from "../types/types.js";
import { Product } from "../models/products.js";
import ErrorHandler from "../utils/utility-class.js";
import { rm } from "fs";
import {faker} from '@faker-js/faker'

export const newProduct =Trycatch(
    async(req: Request<{},{},NewProductRequestBody>,res,next)=>{

        const{name,price,stock,category}=req.body;
        const photo = req.file;

        if(!photo) return next(new ErrorHandler("There is not photo please add one",400));

        if(!name || !price || !stock || !category)
        {
            rm(photo.path,()=>{
                console.log("Deleted")
            })

            return next(new ErrorHandler("There Enter all the feilds",400));

        }
        await Product .create({
                name,
                price,
                stock,
                category:category.toLocaleLowerCase(),
                photo:photo.path,
        })

        return res.status(201).json({
            success:true,
            message:"product Created successfully"
        })
    }

);




export const getlatestProducts =Trycatch(
    async(req,res,next)=>{

        const products = await Product.find({}).sort({createdAt:-1}).limit(5)
        return res.status(201).json({
            success:true,
            products,
        })
    }

);

export const getAllcategories =Trycatch(
    async(req,res,next)=>{

        const categories = await Product.distinct("category");

        return res.status(200).json({
            success:true,
            categories,
        })
    }

);

export const getAdminProducts =Trycatch(
    async(req,res,next)=>{

        const products = await Product.find({});

        return res.status(200).json({
            success:true,
            products,
        })
    }

);

export const getSingleProduct =Trycatch(
    async(req,res,next)=>{

        const product = await Product.findById(req.params.id);
        if(!product) return next(new ErrorHandler("Product not Found",404))

        return res.status(200).json({
            success:true,
            product,
        })
    }

);

export const updateProduct =Trycatch(
    async(
        req,
        res,
        next
        )=>{

         
        const{name,price,stock,category}=req.body;
        const photo = req.file;
        const product=await Product.findById(req.params.id);

        if(!product) return next(new ErrorHandler("Invalid Product Id",404));


        if(photo)
        {
            rm(product.photo!,()=>{
                console.log("Old photo Deleted")
            });

            product.photo=photo.path;
        }
        
        if(name) product.name=name;
        if(price) product.price=price;
        if(stock) product.stock=stock;
        if(category) product.category=category;

        await product.save();
        

        return res.status(200).json({
            success:true,
            message:"product Updated successfully"
        })
    }

);

export const deleteProduct =Trycatch(
    async(req,res,next)=>{
        const product = await Product.findById(req.params.id);

        if(!product) return next(new ErrorHandler("Product not Found",404));

        rm(product.photo!,()=>{
            console.log("Old photo Deleted")
        })
        await product.deleteOne();

        return res.status(200).json({
            success:true,
            message:"Product Deleted successfully"
        })
    }

);


export const getAllproducts =Trycatch(
    async(req:Request<{},{},{},SearchRequestQuery>,res,next)=>{

        const {search,sort,category,price}=req.query;

        const page=Number(req.query.page) || 1;

        const limit = Number(process.env.PRODUCT_PER_PAGE) || 8;
        const skip=(page-1)* limit;

        const baseQuery: BaseQuery = {};

        if(search) baseQuery.name={
            $regex:search,
            $options:"i",
        }
        if(price) baseQuery.price={
            $lte:Number(price),
        }
        if(category) baseQuery.category = category;

        const productPromise =   Product.find(baseQuery)
        .sort(sort && {price:sort==="asc" ? 1: -1} )
        .limit(limit)
        .skip(skip);
       

        const [products,filteredOnlyProduct] = await Promise.all([
            productPromise,
            Product.find(baseQuery),
        ])

                  
        const totalPage =Math.ceil(filteredOnlyProduct.length / limit) ;
        return res.status(201).json({
            success:true,
            products,
            totalPage,
        })
    }

);


// const generateRandomProducts = async(count: number=10)=>{
//     const products=[];

//     for(let i=0;i<count;i++){
//         const product={
//         name:faker.commerce.productName(),
//         photo:"uploads\\54acd0f6-19fc-4a4a-afdc-47e78a61e4ff.png",
//         price:faker.commerce.price({min:1500,max:80000, dec:0}),
//         stock:faker.commerce.price({min:0,max:100,dec:0}),
//         category:faker.commerce.department(),
//         createdAt:new Date(faker.date.past()),
//         updatedAt: new Date(faker.date.recent()),
//         _V:0,
//     };

//     products.push(product)
// }

// await Product.create(products);

// console.log({succecss:true});

// }
// generateRandomProducts(30)


// const deleteRandomProducts=async(count:number=10)=>{
//     const products= await Product.find({}).skip(2);


//     for(let i=0;i<products.length;i++){
//         const product=products[i];
//         await product.deleteOne();
//     }
//     console.log({succecss:true});
// };
// deleteRandomProducts(38);