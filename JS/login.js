let numberInput = document.querySelector('#number')
let label = document.querySelector('.form-label')
let errorMsg = document.querySelector('.error-msg')
let proceedBtn = document.querySelector('.proceed')



function login(){
  let mobileNumber = numberInput.value
  
  let userData = []
  userRecords = JSON.parse(localStorage.getItem('userData'))?JSON.parse(localStorage.getItem('userData')) : []

  if(userRecords.some((v) => {return v.mobileNumber == mobileNumber})){
    window.location.href = 'index.html'
  }
  else{
    window.location.href = 'registration.html'
  }
}