import express from "express";
import productsRouter from "./routes/Products.routes.js";

const app = express();
app.use("/products", productsRouter);
app.listen(3000, () => {
  console.log("server running on port 3000");
});
