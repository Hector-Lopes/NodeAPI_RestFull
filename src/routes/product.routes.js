import { Router, request, response } from "express";
import { randomUUID } from "crypto";

import Select_Products from "../services/Select_Products.js";
import Post_Products from "../services/Post_Products.js";
import Update_Products from "../services/Update_Pruducts.js";
import Delete_Product from "../services/Delete_Products.js";

const ProductRouter = Router();

let Products = [];

ProductRouter.get("/", async (request, response) => {
  const resultsql = await Select_Products();
  return response.json(resultsql);
});

ProductRouter.post("/", async (request, response) => {
  const { name, price } = request.body;

  const Product = {
    name: name,
    price: price,
  };

  const resultsqlpost = await Post_Products(Product);

  return response.json("inserido com sucesso");
});
ProductRouter.put("/:id", async (request, response) => {
  const { id } = request.params;
  const { name, price } = request.body;
  const Product = {
    id: id,
    name: name,
    price: price,
  };

  const resultsqlput = await Update_Products(Product);
});

ProductRouter.delete("/:id", async (request, response) => {
  const { id } = request.params;

  const resultsqldelete = await Delete_Product(id);
});

export default ProductRouter;
