

window.onload = () => {
    if(window.location.search){
        getUserById()
    }
}

let userId1;
let userid2;
let userId3;
let userId4;
let userId5;


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

      userId1 = user[0].id_dieta
   


      user1.append(user[0].name)
      idade1.append(user[0].idade)
      dieta1.append(user[0].id_dieta)



}

let butCard = document.getElementById('butCard')
let cardapio = document.getElementById('inputUp')
let peso = document.getElementById('inputDown')

async function comparar(){
    const resultado = await fetch("http://localhost:2222/getCardapio/" + userId1, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        let cardapiojson = await resultado.json()

        console.log(cardapiojson)


            let encontrei = false
        for(let i = 0; i < cardapiojson.length; i++){
            console.log(cardapio.value)
            console.log(cardapiojson[i].name)
                if(cardapio.value == cardapiojson[i].name){
                    encontrei = true
            }
                
            
        }
        if(encontrei){
            alert('sua dieta esta certa')
        }
        else{
            alert('sua dieta ta errada')
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
