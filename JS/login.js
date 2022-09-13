let numberInput = document.querySelector('#number')
let label = document.querySelector('.form-label')
let errorMsg = document.querySelector('.error-msg')
let proceedBtn = document.querySelector('.proceed')

numberInput.addEventListener('click', () => {
  numberInput.classList.remove('alert')
})

function login(){
  event.preventDefault()
  let mobileNumber = numberInput.value
  let regExp = /^[6789]{1}[0-9]{9}$/

  if((!mobileNumber.match(regExp)) || (mobileNumber.length != 10)){
    errorMsg.innerHTML = `Please enter correct mobile number`
    label.classList.add('alert')
    numberInput.classList.add('alert')
  }
  else if(mobileNumber == ''){
    errorMsg.innerHTML = `Number cannot be empty`
    label.classList.add('alert')
    numberInput.classList.add('alert')
  }
  else{
    label.classList.remove('alert')
    numberInput.classList.remove('alert')



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