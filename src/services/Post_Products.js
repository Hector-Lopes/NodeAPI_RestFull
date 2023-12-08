import { sql } from "../database/db.js";

const Post_Products = async ({ name, price }) => {
  const result = await sql`
  INSERT INTO products (name,price)
  values (${name},${price})
  returning name, price
  `;
  const rowcount = result.length;

  console.log(rowcount);
  return rowcount;
};

export default Post_Products;
