// registration form validation and store data in localStorage

// email validation
let email = document.querySelector('#email')
let label = document.querySelector('.email-label')
let errorMsg = document.querySelector('.evm')
let emailVerifyBtn = document.querySelector('.emailVerify')
let verifyMsg = document.querySelector('.verify-msg')
let verifyIcon = document.querySelector('.icon-1')
let TnC = document.querySelector('.TnC')
let proceedBtn = document.querySelector('.proceed')

let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

if(email.value.length == 0){
  emailVerifyBtn.disabled = true
}
function check(){
  if(email.value.match(regExp)){
    emailVerifyBtn.style.opacity = '1'
    emailVerifyBtn.style.cursor = 'pointer'
    emailVerifyBtn.disabled = false
    email.classList.remove('alert')
    label.classList.remove('alert')
    errorMsg.innerHTML = ``
  }
  else{
    emailVerifyBtn.style.opacity = '0.6'
    emailVerifyBtn.style.cursor = 'not-allowed'
    errorMsg.innerHTML = 'Please enter valid email address'
    email.classList.add('alert')
    label.classList.add('alert')
    errorMsg.classList.add('alert')
  }

  if(email.value.length==0){
    email.classList.add('alert')
    label.classList.add('alert')
    errorMsg.innerHTML = `This field is mandetory`
    errorMsg.classList.add('alert')
  }
}
// event for verify-email button
emailVerifyBtn.addEventListener('click', function() {
  this.innerHTML = "<div class='loader'></div>"
  this.style.border = 'none'
  // console.log(emailVerifyBtn.innerHTML);

  setTimeout(() => {
    this.innerHTML = `Email verified successfully`
    this.classList.add('verified')
    TnC.classList.remove('inactive')
  }, 2000)
})

proceedBtn.disabled = true
// check checkbox is chexked or not
let checkbox = document.querySelector('#tnc')
checkbox.addEventListener('click', () => {
  if(checkbox.checked){
    proceedBtn.style.opacity = '1'
    proceedBtn.style.cursor = 'pointer'
    proceedBtn.disabled = false
  }
  else{
    proceedBtn.style.opacity = '0.6'
    proceedBtn.style.cursor = 'not-allowed'
  }
})


// onclick proceedBtn user goes on profile page
proceedBtn.addEventListener('click', () => {
  window.location.href = 'profile.html'
})