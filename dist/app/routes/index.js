"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = __importDefault(require("../modules/product/product.route"));
const router = express_1.default.Router();
const routes = [
    {
        path: "/product",
        route: product_route_1.default,
    },
];
routes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
