

window.onload = () => {
    if(window.location.search){
        getUserById()
    }
}



console.log(window)

async function getUserById(){

    

    const id  = window.location.search.replace('?id=', '')

    const resultado = await fetch("http://localhost:2222/getUsers/" + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const user = await resultado.json()
      console.log(user[0])

      let user1 = document.getElementById('user')
      let idade1 = document.getElementById('idade')
      let dieta1 = document.getElementById('dieta')

      user1.append(user[0].name)
      idade1.append(user[0].idade)
      dieta1.append(user[0].id_dieta)



}

let butCard = document.getElementById('butCard')
let inputCard = document.getElementById('inputUp')

async function comparar(){
    const resultado = await fetch("http://localhost:2222/getCardapio", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        let result = await resultado.json()

        console.log(result)

    if(inputCard.value === result[0].name){
        alert('Este cara realmente da o c')
    }
    else{
        alert('Cai fora')
    }
}

butCard.addEventListener('click', comparar)

let btnDelete = document.getElementById('delete')
let div = document.querySelector('.center')



function deleteUser(e){
    const user = e.target.parentNode.parentNode
    user.removeChild(div)
}

btnDelete.addEventListener('click', deleteUser)
