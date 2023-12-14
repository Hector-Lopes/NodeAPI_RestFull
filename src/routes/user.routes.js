import { Router, request, response } from "express";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";

import Login_User from "../services/Login_User.js";

const UserRouter = Router();

UserRouter.use(bodyParser.json());
UserRouter.use(bodyParser.urlencoded({ extended: false }));

UserRouter.get("/", async (request, response) => {
  const { user, password } = request.query;

  const User = { user: user, password: password };

  const result = await Login_User(User);

  return response.json(result);
});

export default UserRouter;
