CatchValue = () => {
  $.ajax({
    type: "GET",
    url: "http://localhost:3333/products",
    data: {},
    cache: false,
    complete: (resultsql) => {
      alert("selecionado com sucesso");
      console.log(resultsql);
    },
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
