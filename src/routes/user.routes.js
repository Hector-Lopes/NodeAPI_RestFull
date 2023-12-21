import { Router, request, response } from "express";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";

import verifyJWT from "../middleware/verifyJWT.js";
import Login_User from "../services/Login_User.js";
import Select_Users from "../services/Select_Users.js";
import dotenv from "dotenv";

dotenv.config();

const { SECRET_JWT } = process.env;
const UserRouter = Router();

UserRouter.use(bodyParser.json());
UserRouter.use(bodyParser.urlencoded({ extended: false }));

UserRouter.get("/", async (request, response) => {
  const { user, password } = request.query;
  const User = { user: user, password: password };

  const result = await Login_User(User);
  const { userr, namee, id } = result;

  if (result !== 0) {
    const token = jwt.sign({ id }, SECRET_JWT, { expiresIn: 300 });
    const Payload = { auth: true, token, userr, namee, id };
    console.log(Payload);
    return response.json(Payload);
  } else {
    return response.json(result);
  }
});

UserRouter.get("/LIST", verifyJWT, async (request, response) => {
  console.log("a");
  const result = await Select_Users();
  console.log(result);
  return response.json(result);
});

export default UserRouter;
