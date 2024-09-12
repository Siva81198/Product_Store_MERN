import express from "express";
// import mongoose from "mongoose";
// import Product from "../models/product.model.js";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

//PUT - Update all the fields in the resource.
//PATCH - Update some fields in the resource.

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
