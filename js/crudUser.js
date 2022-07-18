window.onload = () => {
  if (window.location.search) {
    getUserById();
  }
};

let userId1;
let userId2;

let idUser;
let dietaUser;


let butCard = document.getElementById("butCard");
let cardapio = document.getElementById("inputUp");
let peso = document.getElementById("inputDown");


console.log(window);





async function comparar() {
    const resultado = await fetch(
        "http://localhost:2222/getCardapio/" + userId1,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
        );
        let cardapiojson = await resultado.json();
        console.log(cardapiojson);
        
        
        let encontrei = false;
        for (let i = 0; i < cardapiojson.length; i++) {
            option = cardapiojson[i].name
            option2 = cardapiojson[i].peso
            // console.log(cardapio.value);
            // console.log(cardapiojson[i].name);
            if (cardapio.value == cardapiojson[i].name) {
                if (peso.value == cardapiojson[i].peso) {
                    encontrei = true;
                }
            }
        }
        if (encontrei) {
            alert("Parabéns, continue assim!!!");
        } else {
            alert("Se esforça mais cara");
        }

        location.reload()
    }
    
    butCard.addEventListener("click", comparar);

    async function card() {
        console.log("ola")
          const resultado = await fetch("http://localhost:2222/getCardapio/" + userId1, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          let cardapiojson = await resultado.json()
          for(let i = 0; i < cardapiojson.length; i++){
              cardapio.innerHTML += `
              <option value=''></option>
              <option value='${cardapiojson[i].name}'>${cardapiojson[i].name}</option>`
              peso.innerHTML += `
              <option value=''><option>
              <option value='${cardapiojson[i].peso}'>${cardapiojson[i].peso}</option>`
              console.log(cardapiojson[i])
          }
      }

      async function userRef() {
        console.log("ola")
          const resultado = await fetch("http://localhost:2222/getuserRef", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          let userRef = await resultado.json()
          console.log(userRef)


          }
      


      async function upUser(){
        const name = document.getElementById('upUser').value
        const id_dieta = document.getElementById('upDieta').value
        const idade = document.getElementById('upIdade').value
        const resultado = await fetch("http://localhost:2222/upUsers/" + userId2, {
            method: "PUT",
            body: JSON.stringify({
                name,
                id_dieta,
                idade
               }),
               headers: {
                "Content-Type": "application/json",
               }
        })

        let result =  await resultado.json()
        console.log(result)

        alert("Usuario alterado")

      }
let btUpdate = document.getElementById('btUpdate')
btUpdate.addEventListener('click', upUser)

  
    
    async function getUserById() {
      const id = window.location.search.replace("?id=", "");
    
      const resultadoUser = await fetch("http://localhost:2222/getUsers/" + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
        
        const user = await resultadoUser.json();
        console.log(user[0]);
        
        userId1 = user[0].id_dieta;
        userId2 = user[0].id
      let user1 = document.getElementById("user");
      let idade1 = document.getElementById("idade");
      let dieta1 = document.getElementById("dieta");
    
   
    
      user1.append(user[0].name);
      idade1.append(user[0].idade);
      dieta1.append(user[0].id_dieta);
    
   
    card()
    userRef()
      
    }

let btnDelete = document.getElementById("delete");
let div = document.querySelector(".center");

async function deleteUser(e) {
    const resultado = await fetch(
        "http://localhost:2222/deleteUser/" + userId2,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }
    )

    let deletei = resultado.json()
    console.log(deletei)

  const user = e.target.parentNode.parentNode;
  user.removeChild(div);

  alert("Usuario deletado")

  location.reload()
}

btnDelete.addEventListener("click", deleteUser);
