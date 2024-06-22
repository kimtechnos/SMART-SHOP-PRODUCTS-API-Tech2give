import { Router } from "express";
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
router.get("/:id", (req, res) => {
  res.send("getting a single product");
});
router.post("/", (req, res) => {
  res.send("creating a product");
});
router.patch("/:id", (req, res) => {
  res.send("updating a product");
});
router.delete("/:id", (req, res) => {
  res.send("deleting a product");
});
export default router;
