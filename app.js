const express = require("express");

const app = express();

app.get("/primeira-rota", (request, response) => {
  return response.json({
    message: "Rota primeira",
  });
});

app.listen(3333, () => console.log("servidor rodando porta 3333"));
