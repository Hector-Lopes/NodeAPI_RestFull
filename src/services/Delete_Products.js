import { sql } from "../database/db.js";

const Delete_Product = async (id) => {
  const result = await sql`
delete from products where id=${id}
returning id
`;
  const rowcount = result.length;
  console.log(rowcount);
  return rowcount;
};

export default Delete_Product;
