let postUserCard = document.getElementById("select")



async function postUser() {

  
    const user = document.getElementById('user').value
    const dieta = document.getElementById('dieta').value
    const idade = document.getElementById('idade').value
    
    const resultado = await fetch("http://localhost:2222/createUser", {
      method: "POST",
      body: JSON.stringify({
       user,
       dieta,
       idade
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await resultado.json()
    console.log(result);

    alert("Usuario criado")
  }

  let btn2 = document.getElementById('btn2')
  btn2.addEventListener("click", postUser);


  // async function card() {
  //   console.log("ola")
  //     const resultado = await fetch("http://localhost:2222/getCardapio", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  
  //     let cardapiojson = await resultado.json()
  //     for(let i = 0; i < cardapiojson.length; i++){
  //       postUserCard.innerHTML += `
  //       <option value=''></option>
  //       <option value='${cardapiojson[i].name}'>${cardapiojson[i].name}
  //       `
  //     }
  // }

  // card()