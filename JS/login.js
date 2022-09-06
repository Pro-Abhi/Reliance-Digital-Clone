// Login / Register
let errorMsg = document.querySelector('.error-msg')
let number = document.querySelector('#number')
let proceedBtn = document.querySelector('.proceed')
let label = document.querySelector('.form-label')


number.addEventListener('focus', () => {
  // number.value = ''
  number.classList.remove('alert')
  label.classList.remove('alert')
  errorMsg.innerText = ''
})

proceedBtn.addEventListener('click', () => {

  if(number.value.length == 10){
    setTimeout(() => {
      window.location.href = 'registration.html'
    }, 1000)
  }
  else if(number.value.length > 0 && number.value.length < 10){
    number.classList.add('alert')
    label.classList.add('alert')
    errorMsg.innerText = `Please enter correct number`
  }
  else if(number.value.length == 0){
    number.classList.add('alert')
    label.classList.add('alert')
    errorMsg.innerText = `*Number is mandetory`
  }
})