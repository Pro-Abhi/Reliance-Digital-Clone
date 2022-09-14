let user_Name = document.querySelectorAll('.userName')
let userEmail = document.getElementsByClassName('userEmail')

for (let i of user_Name){
  i.innerHTML = localStorage.getItem('userName')
}

for (let i of userEmail){
  i.innerHTML = localStorage.getItem('userEmail')
}