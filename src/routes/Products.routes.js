import { Router } from "express";
import { validateProductInformation } from "../middlewares/product.middlewares.js";

import {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controllers.js";
const router = Router();

router
  .get("/", getAllProducts)
  .get("/:id", getSingleProduct)
  .post("/", validateProductInformation, createProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct);
export default router;
