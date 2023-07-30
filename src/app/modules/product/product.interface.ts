import mongoose from "mongoose";

type IReview = {
    rating: number;
    description: string;
};

export type IProduct = {
    image: string;
    productName: string;
    category:
        | "CPU Processor"
        | "Motherboard"
        | "RAM"
        | "Power Supply Unit"
        | "Storage Device"
        | "Monitor"
        | "Others";
    price: number;
    status: "In Stock" | "Out of Stock";
    averageRating: number;
    description: string;
    keyFeatures: string[];
    reviews: IReview[];
};

export type ProductModel = mongoose.Model<IProduct, string>;
