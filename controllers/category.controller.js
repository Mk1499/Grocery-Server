import Category from "../models/category.js";

export const addCategory = async (req, res) => {
  try {
    const newCategory = new Category(req?.body);
    await newCategory.save();
    res.status(201).json({ message: "Category added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add category" });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Categories" });
  }
};
