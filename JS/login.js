let numberInput = document.querySelector('#number')
let label = document.querySelector('.form-label')
let errorMsg = document.querySelector('.error-msg')
let proceedBtn = document.querySelector('.proceed')



function login(){
  let mobileNumber = numberInput.value

  if(mobileNumber == ''){
    errorMsg.innerHTML = `Number cannot be empty`
    label.classList.add('alert')
    numberInput.classList.add('alert')
  }
  else{
    let userRecords = []
    userRecords = JSON.parse(localStorage.getItem('userData'))?JSON.parse(localStorage.getItem('userData')) : []
  
    if(userRecords.some((v) => {return v.mobileNumber == mobileNumber})){

      let currentUser = userRecords.filter((v) => {return v.mobileNumber == mobileNumber})[0]
      localStorage.setItem('userName', currentUser.firstName)
      window.location.href = 'index.html'
    }
    else{
      localStorage.setItem('userMobile', mobileNumber)
      window.location.href = 'registration.html'
    }
  }
}