import { sql } from "../database/db.js";

const Update_Products = async ({ id, name, price }) => {
  sql`
  update products set name=${name}, price=${price} where id =${id}
  returning id
  `.then((e) => {
    const rowcount = e.length;
    if (rowcount >= 1) {
      console.log("Atualizado com sucesso");
    } else {
      console.log("Falha ao Atualizar ");
    }
  });
  return sql;
};

export default Update_Products;
