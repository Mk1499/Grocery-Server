import express from "express";
import {
  addCategory,
  getAllCategories,
} from "../controllers/category.controller.js";

const categoryRouter = express.Router();

categoryRouter.get("/", (req, res) => {
  getAllCategories(req, res);
});

categoryRouter.post("/add", (req, res) => {
  addCategory(req, res);
});

export default categoryRouter;
