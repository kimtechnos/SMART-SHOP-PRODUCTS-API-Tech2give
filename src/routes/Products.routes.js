import { Router, response } from "express";
import pool from "../db.config.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.status(200).json({ success: true, data: result.rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query("SELECT * FROM products WHERE id=$1", [id]);
    if (result.rowCount === 0) {
      res.status(404).json({ success: false, message: "product not found" });
    } else {
      res.status(200).json({ success: true, data: result.rows[0] });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
const validateProductInformation = (req, re, next) => {
  const productThumbnail = req.body.productThumbnail;
  const productTitle = req.body.productTitle;
  const productDescription = req.body.productDescription;
  const productCost = req.body.productCost;
  const onOffer = req.body.onOffer;
  next();
};
router.post("/", validateProductInformation, async (req, res) => {
  try {
    // if(!productTitle) return res.status(400).json({success:false,message:"product title required"});
    const productThumbnail = req.body.productThumbnail;
    const productTitle = req.body.productTitle;
    const productDescription = req.body.productDescription;
    const productCost = req.body.productCost;
    const onOffer = req.body.onOffer;
    const insert = await pool.query(
      "INSERT INTO products(productThumbnail, productTitle, productDescription, productCost, onOffer) VALUES($1, $2, $3, $4, $5)",
      [
        productThumbnail,
        productTitle,
        productDescription,
        productCost,
        onOffer,
      ],
    );
    if (insert.rowCount === 1) {
      res
        .status(201)
        .json({ success: true, message: "product created successfully" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const {
    productThumbnail,
    productTitle,
    productDescription,
    productCost,
    onOffer,
  } = req.body;
  try {
    let updateOperation;
    if (productTitle) {
      updateOperation = await pool.query(
        "UPDATE products SET productTitle=$1 WHERE id=$2",
        [productTitle, id],
      );
    }
    if (productThumbnail) {
      updateOperation = await pool.query(
        "UPDATE products SET productThumbnail=$1 WHERE id=$2",
        [productThumbnail, id],
      );
    }
    if (productDescription) {
      updateOperation = await pool.query(
        "UPDATE products SET productDescription=$1 WHERE id=$2",
        [productDescription, id],
      );
    }
    if (productCost) {
      updateOperation = await pool.query(
        "UPDATE products SET productCost=$1 WHERE id=$2",
        [productCost, id],
      );
    }
    if (onOffer) {
      updateOperation = await pool.query(
        "UPDATE products SET onOffer=$1 WHERE id=$2",
        [onOffer, id],
      );
    }
    if (updateOperation.rowCount === 1) {
      res
        .status(200)
        .json({ success: true, message: "product updated successfully" });
    } else {
      res.status(400).json({ success: false, message: "Invalid product" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
  //  res.send("updating a product");
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteOperation = await pool.query(
      "DELETE FROM  products WHERE id=$1",
      [id],
    );
    if (deleteOperation.rowCount === 1) {
      res
        .status(200)
        .json({ success: true, message: "product deleted successfully" });
    } else {
      res.status(400).json({ success: false, message: "Invalid product" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
  // res.send("deleting a product");
});
export default router;
