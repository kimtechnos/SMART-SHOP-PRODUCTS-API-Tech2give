import express from "express";
import productsRouter from "./routes/Products.routes.js";

const app = express();
app.use(express.json());
app.use("/products", productsRouter);
app.listen(3001, () => {
  console.log("server running on port 3001");
});
