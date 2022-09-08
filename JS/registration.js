// queryselector for all input fields
let form = document.querySelector('#form')
let firstName = document.querySelector('#fname')
let lastName = document.querySelector('#lname')
let emailID = document.querySelector('#email')
let mobileNumber = document.querySelector('#number')

// queryselector for label
let firstNameLabel = document.querySelector('.firstName-label')
let lastNameLabel = document.querySelector('.lastName-label')
let emailLabel = document.querySelector('.email-label')
let mobileNumberLabel = document.querySelector('.number-label')

// queryselector for error-msg
let firstNameError = document.querySelector('.f-error')
let lastNameError = document.querySelector('.l-error')
let emailError = document.querySelector('.e-error')
let mobileNumberError = document.querySelector('.m-error')

// querryselector for buttons
let emailVerifyBtn = document.querySelector('.emailVerify')
let proceedBtn = document.querySelector('.proceed')

// check validation on click submit button
// function signUp(){
//   let FirstName = firstName.value
//   console.log(FirstName, FirstName.length);
//   let LastName = lastName.value
//   console.log(LastName, LastName.length);
//   let EmailID = emailID.value
//   console.log(EmailID, EmailID.length);
//   let MobileNumber = mobileNumber.value
//   console.log(MobileNumber, MobileNumber.length);

// // first-name validation
//   let firstNameCheck = /^[A-Za-z. ]{3,20}$/
//   if(firstNameCheck.test(FirstName)){
//     firstNameError.innerHTML = ''
//     firstNameLabel.classList.remove('alert')
//     firstName.classList.remove('alert')
//   }else{
//     firstNameError.innerHTML = `Invalid name`
//     firstNameError.classList.add('alert')
//     firstNameLabel.classList.add('alert')
//     firstName.classList.add('alert')
//     return false
//   }

// // last-name validation
//   let lastNameCheck = /^[A-Za-z. ]{3,20}$/
//   if(lastNameCheck.test(LastName)){
//     lastNameError.innerHTML = ''
//   }else{
//     lastNameError.innerHTML = `Invalid name`
//     lastNameError.classList.add('alert')
//     lastNameLabel.classList.add('alert')
//     lastName.classList.add('alert')
//     return false
//   }

//   // if both first-name & last-name same
//   if(FirstName == LastName){
//     lastNameError.innerHTML = `last-name should be different from first name`
//     return false
//   }


//   emailVerifyBtn.disabled = true
// // email validation
//   let emailCheck = /^[A-Za-z_.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/
//   if(emailCheck.test(EmailID)){
//     emailError.innerHTML = ''
//     emailVerifyBtn.style.opacity = '1'
//     emailVerifyBtn.style.cursor = 'pointer'
//     emailVerifyBtn.disabled = false
//   }
//   else{
//     emailError.innerHTML = `Invalid email`
//     return false
//   }

// // mobile-number validation
//   let mobileNumberCheck = /^[6789]{1}[0,9]{9}$/
//   if(mobileNumberCheck.test(MobileNumber)){
//     mobileNumberError.innerHTML = ''
//   } else{
//     mobileNumberError.innerHTML = `Invalid mobile number`
//     return false
//   }
// }
