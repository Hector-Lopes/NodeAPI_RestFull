import { sql } from "../database/db.js";

const Post_Products = async ({ name, price }) => {
  sql`
  INSERT INTO products (name,price)
  values (${name},${price})
    `.then((e) => {
    console.log(e);
    console.log("passou por aqui ");
  });

  return sql;
};

export default Post_Products;
