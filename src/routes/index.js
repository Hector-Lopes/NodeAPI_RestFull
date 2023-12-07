import { Router } from "express";

import ProductRouter from "./product.routes.js";

const routes = Router();

routes.use("/products", ProductRouter);

export default routes;
