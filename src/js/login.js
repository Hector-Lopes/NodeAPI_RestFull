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
        console.log(resultsql);
      },
    });
  });
};

// export const Teeste = () => {
//   alert("exportando");
// };
