// for login-sign-up
// get userName after login
let nameData;
let user = JSON.parse(localStorage.getItem('userData'))
  for(let i of user){
    nameData = i.firstName
    localStorage.setItem('firstName', nameData)
  }
console.log(nameData);


let userName = document.getElementById("user_Name");
if (localStorage.getItem("userName") != null) {
  userName.innerHTML = localStorage.getItem("userName");
}
else if(localStorage.getItem('userName') == null){
  userName.innerText = `${'Hi '}` + localStorage.getItem('firstname')
}



function logincheck() {
  if ((localStorage.getItem("userName") != null) || (nameData != null)) {
    window.location.href = "profile.html";
  } else {
    window.location.href = "login.html";
  }
}


// popup-box for account options if user login or signup
if((localStorage.getItem("userName") != null) || (localStorage.getItem('userData') != null)){
  document.querySelector('.login').classList.add('in')
}


function logout(){
  localStorage.removeItem('userMobile')
  localStorage.removeItem('userName')
  localStorage.removeItem('firstName')
  window.location.href = 'index.html'
}
