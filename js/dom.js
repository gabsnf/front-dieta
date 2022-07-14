// import { put } from "./index"
// import { get } from "./index";


let ul = document.querySelector('ul')
let btn1 = document.querySelector('button')
let input =  document.querySelector('input')

function addUser(e){
  e.preventDefault()

  let li = document.createElement('li')
  ul.append(li)
  li.style.listStyle = 'none'
  li.append(input.value)
  input.value = ""
  let check = document.createElement('button')
  check.className('btn1')
  li.append(check)
}

btn1.addEventListener('click', addUser)










