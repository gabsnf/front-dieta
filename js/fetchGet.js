let ul = document.querySelector("ul");
let input = document.querySelector("input");
let butGet = document.querySelector("#butGet")


async function get(event) {
  event.preventDefault();
  const resultado = await fetch("http://localhost:2222/getUsers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let result = await resultado.json();
  console.log(result);

  for (let i = 0; i < result.length; i++) {
    ul.innerHTML += `
                        <ul><li><span id="id1">ID: ${result[i].id}</span></li>
                        <li><span id="nome1">Nome: ${result[i].name}<span></li>
                        <li><span id="idDieta1">ID da dieta: ${result[i].id_dieta}<span></li>
                        <li><span id="idade1">Idade: ${result[i].idade}<span></li>
                        <button onclick="return getId(event, ${result[i].id})" id="butGet">Ver</button>
                        </ul>`;

                        
              
  }
}

async function getId(event, id) {
    event.preventDefault();
 
 

  window.location.replace(`./crudUser.html?id=${id}`)

  


}



 let getUser = document.getElementById("btn1");

 getUser.addEventListener("click", get);


