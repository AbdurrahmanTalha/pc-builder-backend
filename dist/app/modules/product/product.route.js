"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = __importDefault(require("./product.controller"));
const router = express_1.default.Router();
router.get("/getRandomProducts", product_controller_1.default.getRandomProducts);
router.get("/getProductByCategory/:category", product_controller_1.default.getProductByCategory);
router.get("/:id", product_controller_1.default.getProduct);
router.post("/", product_controller_1.default.createProduct);
exports.default = router;
