import { sql } from "../database/db.js";

const Select_Products = async () => {
  const result = await sql`
  select * from products

    `;
  console.log(result);
  return result;
};

// async function Select_Products() {
//   sql`
//     select * from products

//       `.then(() => {
//     console.log("Selecionado");
//   });
//   return sql;
// }

export default Select_Products;
