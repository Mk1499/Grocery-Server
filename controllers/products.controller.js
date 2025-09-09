import Product from "../models/products.js";

export const addProduct = async (req, res) => {
  try {
    // Your logic to add a product goes here
    const newProduct = new Product(req?.body);
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const product = await Product.find({ category: categoryId });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products by category" });
  }
};
