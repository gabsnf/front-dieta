async function put() {

  
    const dieta = document.querySelector(`#id_dieta`).value
    const name = document.querySelector('#user').value
    console.log(id_dieta)
    const resultado = await fetch("http://localhost:2222/updateId_dieta", {
      method: "PUT",
      body: JSON.stringify({
        id_dieta,
        id
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(resultado);

    alert("Usuario alterado")
  }
  
  let putUser = document.getElementById("btn2");
  
  putUser.addEventListener("click", put);