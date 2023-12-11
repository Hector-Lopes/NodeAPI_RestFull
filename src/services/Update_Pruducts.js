import { sql } from "../database/db.js";

const Update_Products = async ({ id, name, price }) => {
  const result = await sql`
  update products set name=${name}, price=${price} where id =${id}
  returning id
  `;

  return result;
};

export default Update_Products;
