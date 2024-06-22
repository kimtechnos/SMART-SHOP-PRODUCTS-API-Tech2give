import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("getting all products");
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
