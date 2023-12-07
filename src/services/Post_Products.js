import { sql } from "../database/db.js";

const Post_Products = async ({ name, price }) => {
  sql`
  INSERT INTO products (name,price)
  values (${name},${price})
  returning name, price
  `.then((e) => {
    const rowcount = e.length;
    if (rowcount >= 1) {
      console.log("Inserido com sucesso");
    } else {
      console.log("Falha ao Inserir ");
    }
  });

  return sql;
};

export default Post_Products;
