import { createServer } from "node:http";

const server = createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.write("ola");

  if (request.url === "/User") {
    return response.end(
      JSON.stringify({
        message: "Rota de usuario",
      })
    );
  }
  if (request.url === "/Product") {
    return response.end(
      JSON.stringify({
        message: "Rota de Produto",
      })
    );
  }
  return response.end(
    JSON.stringify({
      message: "Rota padrão",
    })
  );
});

server.listen(3334), () => console.log("Servidor rodando na porta 3333");
