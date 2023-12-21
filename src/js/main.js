funcao = () => {
  Teeste();
};

CatchValue = async () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "GET",
      url: "http://localhost:3333/products",
      data: {},
      cache: false,
      success: (resultsql) => {
        resolve(resultsql);
      },
    });
  });
};

CatchOneValue = async (id) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "GET",
      url: "http://localhost:3333/products/" + id,
      data: {},
      cache: false,
      success: (resultsql) => {
        resolve(resultsql);
      },
    });
  });
};

PostValue = () => {
  const name = $(".input_name").val();
  const price = $(".input_price").val();
  $.ajax({
    type: "POST",
    url: "http://localhost:3333/products/",
    data: { name: name, price: price },
    cache: false,
    success: (resultsql) => {
      if (resultsql >= 1) {
        alert("Inserido com sucesso");
      } else {
        alert("Falha ao Inserir ");
      }
    },
  });
};

PutValue = async () => {
  const id = $(".input_id_updt").val();
  const name = $(".input_name_updt").val();
  const price = $(".input_price_updt").val();
  // const Product = await CatchOneValue(id);
  // if (!Product) {
  //   console.error("Product not found");
  //   return;
  // } else {
  //   console.log(Product);
  // }

  // const { name, price } = Product[0];

  $.ajax({
    type: "PUT",
    url: "http://localhost:3333/products/" + id,
    data: { name: name, price: price },
    cache: false,
    success: (resultsql) => {
      alert("atualizado com sucesso");
    },
  });
};

DeleteValue = async () => {
  const id = $(".input_id_del").val();

  $.ajax({
    type: "DELETE",
    url: "http://localhost:3333/products/" + id,
    cache: false,
    success: (resultsql) => {
      alert("chegou");
      if (resultsql) {
        alert("deletado com sucesso");
      } else {
        alert("Erro ao deletar");
      }
    },
  });
};

Listar_Users = () => {
  const token = localStorage.getItem("tokenn");

  console.log(token);

  $.ajax({
    type: "GET",
    url: "http://localhost:3333/user/LIST",
    data: {},
    cache: false,
    headers: {
      // "Content-Type": "application/json", // Exemplo de header
      // Authorization: token, // Exemplo de header de autorização
      "x-access-token": token,
    },
    success: () => {
      alert("Tudo ok");
    },
    error: () => {
      alert("Token expirou");
    },
  });
};
