import { NextFunction, Request, Response } from "express";

export interface NewUserRequestBody {
  name: string;
  email: string;
  photo: string;
  gender: string;
  role: string;
  _id: string;
  dob: Date;
}

export interface NewProductRequestBody {
  name: string;
  category: string;
  price:number;
  stock:number;
}

export type Controllertype = (
  req: Request,
  res: Response,
  next: NextFunction
) =>Promise<void | Response<any, Record<string, any>>>;


export type SearchRequestQuery={
  search?:string;
  price?:string;
  category?:string;
  sort?:string;
  page?:string;
}

export interface BaseQuery{
  name?:{
    $regex:string,
    $options:"i",
  };
  price:{$lte:number;};
  category:string;
}