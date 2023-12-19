import jwt from "jsonwebtoken";

const SECRET = "admfree";

export default function verifyJWT(request, response, next) {
  const token = request.headers["x-access-token"];
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return response.status(401).end();
    }
    request.id = decoded.id;
    next();
  });
}
