import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const { SECRET_JWT } = process.env;

export default function verifyJWT(request, response, next) {
  const token = request.headers["x-access-token"];
  jwt.verify(token, SECRET_JWT, (err, decoded) => {
    if (err) {
      return response.status(401).end();
    }
    request.id = decoded.id;
    next();
  });
}
