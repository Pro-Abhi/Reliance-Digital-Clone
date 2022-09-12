// for login-sign-up
// get userName after login
let nameData;
let user = JSON.parse(localStorage.getItem('userData'))
  for(let i of user){
    nameData = i.firstName
  }
console.log(nameData);


let userName = document.getElementById("user_Name");
if (localStorage.getItem("userName") != null) {
  userName.innerHTML = localStorage.getItem("userName");
}
else if(localStorage.getItem('userName') == null){
  userName.innerText = `${'Hi '}` + nameData
}



function logincheck() {
  if ((localStorage.getItem("userName") != null) || (nameData != null)) {
    window.location.href = "profile.html";
  } else {
    window.location.href = "login.html";
  }
}


