import mongoose from "mongoose";
import { IProduct, ProductModel } from "./product.interface";
import { productCategories } from "./product.constant";

const productSchema = new mongoose.Schema<IProduct, ProductModel>(
    {
        image: {
            type: String,
            required: true,
        },
        productName: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: productCategories,
        },
        price: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
            enum: ["In Stock", "Out of Stock"],
        },
        averageRating: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        keyFeatures: {
            type: [String],
            required: true,
        },
        reviews: {
            type: [
                {
                    rating: Number,
                    description: String,
                },
            ],
        },
    },
    { timestamps: true, versionKey: false }
);

const Product = mongoose.model<IProduct, ProductModel>(
    "Product",
    productSchema
);

export default Product;
