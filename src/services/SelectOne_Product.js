import { sql } from "../database/db.js";

const Select_Product = async (id) => {
  const result = await sql`
  select * from products
where id =${id}
    `;
  return result;
};

export default Select_Product;
