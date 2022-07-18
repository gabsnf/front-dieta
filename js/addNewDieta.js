async function postCard() {

  
    const cardapios = document.querySelector(`#inputUp10`).value
    const peso = document.querySelector('#inputDown10').value
    const type = document.querySelector('#inputType').value
    const id_dieta = document.querySelector('#inputDieta').value
    const resultado = await fetch("http://localhost:2222/createCardapio", {
      method: "POST",
      body: JSON.stringify({
        cardapios,
        peso,
        type,
        id_dieta
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(resultado);
  }

  alert("Dieta criada")

  let postMenu = document.getElementById("btn10");
  postMenu.addEventListener("click", postCard);
  

  