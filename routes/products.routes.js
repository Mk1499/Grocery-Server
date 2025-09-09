import express from "express";
import {
  addProduct,
  getAllProducts,
  getProductsByCategory,
} from "../controllers/products.controller.js";

const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  getAllProducts(req, res);
});

productRouter.get("/byCategory/:categoryId", (req, res) => {
  getProductsByCategory(req, res);
});

productRouter.post("/add", (req, res) => {
  addProduct(req, res);
});

export default productRouter;
