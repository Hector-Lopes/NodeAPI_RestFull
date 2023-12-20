Login = async () => {
  const user = $(".user").val();
  const password = $(".password").val();

  return new Promise((resolve, reject) => {
    $.ajax({
      type: "GET",
      url: `http://localhost:3333/user/?user=${user}&password=${password}`,
      data: {},
      cache: false,
      success: (resultsql) => {
        const { token, userr, namee, id } = resultsql;
        localStorage.setItem("tokenn", token);
        // alert(tokennn);
        if (id && userr) {
          alert(`Seja bem vindo ${namee}`);
          Logar();
          resolve();
        } else {
          alert("falha ao logar");
          reject();
        }
      },
    });
  });
};

Logar = () => {
  $("#container-export").load("../html/main.html");
  window.location.href = "main.html";
};
