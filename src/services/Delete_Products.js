import { sql } from "../database/db.js";

const Delete_Product = async (id) => {
  sql`
delete from products where id=${id}
returning *
`.then((e) => {
    const rowcount = e.length;
    if (rowcount >= 1) {
      console.log("Deletado com sucesso");
    } else {
      console.log("Falha ao Deletar ");
    }
  });
  return sql;
};

export default Delete_Product;
