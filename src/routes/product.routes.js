import { Router, request, response } from "express";
import { randomUUID } from "crypto";

import Select_Products from "../services/Select_Products.js";
import Post_Products from "../services/Post_Products.js";

const ProductRouter = Router();

let Products = [];

ProductRouter.get("/", async (request, response) => {
  const resultsql = await Select_Products();
  return response.json(resultsql);
});

ProductRouter.post("/", async (request, response) => {
  const Product = {
    name: "livro2",
    price: "10",
  };

  const resultsqlpost = await Post_Products(Product);

  return response.json("inserido com sucesso");
});

export default ProductRouter;
