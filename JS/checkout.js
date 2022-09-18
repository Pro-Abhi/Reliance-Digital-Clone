let addAddressBtn = document.querySelector(".add-address-btn");
let inputBox = document.querySelectorAll('.txt-input input')
let addressForm = document.querySelector(".pop-up-form");
let closeBtn = document.querySelector(".close-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let submitBtn = document.querySelector(".submit-btn");
let savesAddressBox = document.querySelector(".address-box");
let errorMsg = document.querySelector('.error-msg')
let editBtn = document.querySelector(".edit-btn");
let deleteBtn = document.querySelector(".delete-btn");

let arrow = document.querySelector('.down-arrow')
let screen = document.querySelector('.address-box')
let arrow2 = document.querySelector('.down-arrow2')
let screen2 = document.querySelector('#paySecurely')
arrow2.disabled = true

addAddressBtn.addEventListener("click", () => {
  addressForm.classList.remove("inactive");
  addAddressBtn.classList.add("inactive");
});

closeBtn.addEventListener("click", () => {
  addressForm.classList.add("inactive");
  addAddressBtn.classList.remove("inactive");
});

cancelBtn.addEventListener("click", () => {
  addressForm.classList.add("inactive");
  addAddressBtn.classList.remove("inactive");
});


let userAddress = [];
let pinCode = document.querySelector("#pinCode");
let firstName = document.querySelector("#fName");
let lastName = document.querySelector("#lName");
let flat = document.querySelector("#flat");
let colony = document.querySelector("#colony");
let landmark = document.querySelector("#landmark");
let city = document.querySelector("#city");
let state = document.querySelector("#state");
let mobileNumber = document.querySelector("#moNumber");
let landline = document.querySelector("#landline");

submitBtn.addEventListener("click", () => {
  inputBox.forEach(e => {
    if(e.value == ''){
      errorMsg.innerText = `*Mandetory fields cannot be empty`
    }
    else{
      userAddress.push({
        'pinCode': pinCode.value,
        'firstName': firstName.value,
        'lastName': lastName.value,
        'flat': flat.value,
        'colony': colony.value,
        'landmark': landmark.value,
        'city': city.value,
        'state': state.value,
        'mobileNumber': mobileNumber.value,
        'landline': landline.value
      });
      localStorage.setItem('userAddress', JSON.stringify(userAddress))
    
      savesAddressBox.classList.remove('inactive')
      addressForm.classList.add('inactive')
      arrow2.disabled = false
    }
  })
});


let address = JSON.parse(localStorage.getItem('userAddress'))
for(let i of address){
  document.querySelector('.userName').textContent = `${i.firstName} ${i.lastName}`
  document.querySelector('.house').textContent = `${i.flat}`
  document.querySelector('.street').textContent = `${i.colony}`
  document.querySelector('.landmark').textContent = `${i.landmark}`
  document.querySelector('.city').textContent = `${i.city}`
  document.querySelector('.pinCode').textContent = `${i.pinCode}`
  document.querySelector('.state').textContent = `${i.state}`
  document.querySelector('.userMobile').textContent = `+91 ${i.mobileNumber}`
}

if(address.length > 0){
  savesAddressBox.classList.remove('inactive')
  addAddressBtn.classList.add('inactive')
}
else{
  savesAddressBox.classList.add('inactive')
  addAddressBtn.classList.remove('inactive')
}

editBtn.addEventListener("click", () => {
  addressForm.classList.remove('inactive')
  if (inputBox.contentEditable != "true") {
    inputBox.contentEditable = "true";
    savesAddressBox.classList.add('inactive')
    localStorage.setItem('userAddress', JSON.stringify(userAddress))
  } else {
    inputBox.contentEditable = "false";
  }
});


deleteBtn.addEventListener('click', () => {
  savesAddressBox.remove()
  userAddress = []
  localStorage.setItem('userAddress', JSON.stringify(userAddress))
  addAddressBtn.classList.remove('inactive')
})


function onOff(){
  if(screen.classList.contains('inactive')){
    screen.classList.remove('inactive')
    arrow.classList.add('upward')
  }
  else{
    screen.classList.add('inactive')
    arrow.classList.remove('upward')
  }
}


function showHide(){
  if(screen2.classList.contains('inactive')){
    screen2.classList.remove('inactive')
    arrow2.classList.add('upward')
  }
  else{
    screen2.classList.add('inactive')
    arrow2.classList.remove('upward')
  }
}



// payment process
document.querySelector('.amount').innerText = localStorage.getItem('totalPrice')


let checkBox = document.querySelector('#checkbox')
let payAmountBtn = document.querySelector('#payAmountBtn')


payAmountBtn.addEventListener('click', () => {
  body.innerHTML = `
    <div class='orderSuccessMsg'>
      <div class="sucessPage">
        <h1>Your Ordered has been received</h1>
        <div class="sucessIcon">
            <i class="fa-solid fa-circle-check"></i>
        </div>
        <h3>Thank you for your purchase!</h3>
        <p>Your order id is: <span class='order-id'>1234574896</span></p>
        <p>You will receive an order confirmation email with details of your order.</p>
        <a href='index.html'><button class="sucess_btn">Continue Shopping</button></a>
      </div>
    </div>
  `
})












