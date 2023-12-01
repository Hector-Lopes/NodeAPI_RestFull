import express from "express";
import { randomUUID } from "crypto";
import fs from "fs";

const app = express();

app.use(express.json());

let produtos = [];

fs.readFile("produtos.json", "utf-8", (err, data) => {
  if (err) {
  } else {
    produtos = JSON.parse(data);
  }
});

// POST => Inserir Dados
// GET => Buscar Dados
// PUT => Alterar Dados
// DELETE => Remover Dados

//body => Sempre que eu quiser enviar dados para minha aplicação
//Params => /Produtcs/hector.lopes  ou /Produtcs/233543657
//Query => /Produtcs?user=hector.lopes ou /Produtcs?id=125437567

app.post("/products", (request, response) => {
  const { name, price } = request.body;

  const product = {
    name,
    price,
    id: randomUUID(),
  };

  produtos.push(product);

  render_product_file();

  return response.json(product);
});

app.get("/products", (request, response) => {
  return response.json(produtos);
});
app.get("/products/:id", (request, response) => {
  const { id } = request.params;

  const product_find = produtos.find((product) => product.id === id);
  return response.json(product_find);
});

app.put("/products/:id", (request, response) => {
  const { name, price } = request.body;
  const { id } = request.params;
  const product_findindex = produtos.findIndex((product) => product.id === id);

  produtos[product_findindex] = {
    ...produtos[product_findindex],
    name,
    price,
  };

  render_product_file();

  return response.json({ message: "Produto Alterado" });
});

app.delete("/products/:id", (request, response) => {
  const { id } = request.params;
  const product_findindex = produtos.findIndex((product) => product.id === id);

  produtos.splice(product_findindex, 1);

  return response.json({ message: "Produto removido" });
});

render_product_file = () => {
  fs.writeFile("produtos.json", JSON.stringify(produtos), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Inserido com sucesso");
    }
  });
};

app.listen(3333, () => console.log("servidor rodando porta 3333"));
