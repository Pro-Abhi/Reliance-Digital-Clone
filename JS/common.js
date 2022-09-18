// for login-sign-up
// get userName after login

let userName = document.getElementById("user_Name");
if (localStorage.getItem("userName") != null) {
  userName.innerHTML = localStorage.getItem("userName");
}



function logincheck() {
  if ((localStorage.getItem("userName") != null)) {
    window.location.href = "/HTML/profile.html";
  } else {
    window.location.href = "/HTML/login.html";
  }
}


// popup-box for account options if user login or signup
if((localStorage.getItem("userName") != null)){
  document.querySelector('.login').classList.add('in')
}


function logout(){
  localStorage.removeItem('userName')
  localStorage.removeItem('userMobile')
  window.location.href = 'index.html'
}








