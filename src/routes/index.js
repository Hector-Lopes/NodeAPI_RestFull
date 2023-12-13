import { Router } from "express";

import ProductRouter from "./product.routes.js";
import UserRouter from "./user.routes.js";
const routes = Router();

routes.use("/products", ProductRouter);
routes.use("/user", UserRouter);

export default routes;
