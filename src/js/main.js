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

    error: (resultsql) => {
      console.log("erro");
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

  console.log(name);
  console.log(price);

  $.ajax({
    type: "PUT",
    url: "http://localhost:3333/products/" + id,
    data: { name: name, price: price },
    cache: false,
    success: (resultsql) => {
      alert("atualizado com sucesso");
      console.log(resultsql);
    },
  });
};
