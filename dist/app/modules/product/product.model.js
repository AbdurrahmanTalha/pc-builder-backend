"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const product_constant_1 = require("./product.constant");
const productSchema = new mongoose_1.default.Schema({
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
        enum: product_constant_1.productCategories,
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
}, { timestamps: true, versionKey: false });
const Product = mongoose_1.default.model("Product", productSchema);
exports.default = Product;
