import { sql } from "./db.js";

sql`
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price NUMERIC(10,2)
);
  
`.then(() => {
  console.log("Tabela criada");
});
// console.log(sql);
