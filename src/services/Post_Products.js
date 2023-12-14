import { sql } from "../database/db.js";

const Post_Products = async ({ name, price }) => {
  const result = await sql`
  INSERT INTO products (name,price)
  values (${name},${price})
  returning name, price
  `;
  const rowcount = result.length;

  return rowcount;
};

export default Post_Products;
