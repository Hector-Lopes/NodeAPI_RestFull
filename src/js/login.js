Login = async () => {
  const user = $(".user").val();
  const password = $(".password").val();

  return new Promise((resolve, reject) => {
    $.ajax({
      type: "GET",
      url: `http://localhost:3333/user/?user=${user}&password=${password}`,
      data: {},
      cache: false,
      complete: (resultsql) => {
        const { userr, namee, id } = resultsql.responseJSON;

        if ((resultsql = !0)) {
          alert(`Seja bem vindo ${namee}`);
          Logar();
        } else {
          alert("falha ao logar");
        }
      },
    });
  });
};

function Teeste() {
  alert("exportando");
}

Logar = () => {
  //   $("#container-export").load("../html/main.html");
  window.location.href = "main.html";
};
