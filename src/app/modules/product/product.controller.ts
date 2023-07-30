import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import service from "./product.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IProduct } from "./product.interface";

const getProduct = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await service.getProductService(id);
    sendResponse<IProduct>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
    });
});

const createProduct = catchAsync(async (req: Request, res: Response) => {
    const result = await service.createProductService(req.body);
    sendResponse<IProduct>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
    });
});

const getRandomProducts = catchAsync(async (req: Request, res: Response) => {
    const result = await service.getRandomProductService()
    sendResponse<IProduct[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
    });
});

const getProductByCategory = catchAsync(async (req: Request, res: Response) => {
    const result = await service.getProductByCategoryService(req.params.category);
    sendResponse<IProduct[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
    });
})

export default { getProduct, createProduct, getRandomProducts, getProductByCategory };
