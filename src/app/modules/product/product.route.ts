import express from "express";
import controller from "./product.controller";

const router = express.Router();

router.get("/getRandomProducts", controller.getRandomProducts);
router.get("/getProductByCategory/:category", controller.getProductByCategory);
router.get("/:id", controller.getProduct);
router.post("/", controller.createProduct);

export default router;
