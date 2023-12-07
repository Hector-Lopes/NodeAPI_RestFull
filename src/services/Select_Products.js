import { sql } from "../database/db.js";

const Select_Products = async () => {
  sql`
  select * from products

    `.then((e) => {
    console.log(e);
    console.log("Selecionado");
  });
  return sql;
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
