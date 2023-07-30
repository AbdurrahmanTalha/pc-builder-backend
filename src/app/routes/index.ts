import express, { Router } from "express";
import productRouter from "../modules/product/product.route";

const router = express.Router();

const routes = [
    {
        path: "/product",
        route: productRouter,
    },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
