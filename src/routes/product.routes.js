import { Router, request, response } from "express";
import { randomUUID } from "crypto";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";

import Select_Products from "../services/Select_Products.js";
import Post_Products from "../services/Post_Products.js";
import Update_Products from "../services/Update_Pruducts.js";
import Delete_Product from "../services/Delete_Products.js";
import Select_Product from "../services/SelectOne_Product.js";

const ProductRouter = Router();

ProductRouter.use(bodyParser.json());
ProductRouter.use(bodyParser.urlencoded({ extended: false }));

ProductRouter.get("/", async (request, response) => {
  const resultsql = await Select_Products();
  return response.json(resultsql);
});

ProductRouter.get("/:id", async (request, response) => {
  const { id } = request.params;
  const resultsql = await Select_Product(id);
  return response.json(resultsql);
});

ProductRouter.post("/", async (request, response) => {
  const { name, price } = request.body;

  const Product = {
    name: name,
    price: price,
  };

  const resultsqlpost = await Post_Products(Product);

  return response.json(resultsqlpost);
});
ProductRouter.put("/:id", async (request, response) => {
  const { id } = request.params;
  const { name, price } = request.body;
  const Product = {
    id: id,
    name: name,
    price: price,
  };

  console.log(Product);

  const resultsqlput = await Update_Products(Product);

  return response.json(resultsqlput);
});

ProductRouter.delete("/:id", async (request, response) => {
  const { id } = request.params;

  const resultsqldelete = await Delete_Product(id);

  return response.json(resultsqldelete);
});

export default ProductRouter;
