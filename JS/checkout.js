const closeButton = document.querySelector(".cross");
const mainContainer = document.querySelector(".upadcontainer");
const cancelButton =document.querySelector(".upadCancel")
const arrow = document.querySelector('.down-arrow')
const arrow2 = document.querySelector('.down-arrow2')
const subContainer = document.querySelector('.subContainer')
let input = document.querySelectorAll('[type="text"]')
let submitBtn = document.querySelector('upadSubmit')
let payAmountBtn = document.querySelector('#payAmountBtn')


function toggle(){
  if(mainContainer.classList.contains('inactive')){
    mainContainer.classList.remove('inactive')
    arrow.classList.add('upward')
  }
  else{
    mainContainer.classList.add('inactive')
    arrow.classList.remove('upward')
  }
}


function showHide(){
  if(subContainer.classList.contains('inactive')){
    subContainer.classList.remove('inactive')
    arrow2.classList.add('upward')
  }
  else{
    subContainer.classList.add('inactive')
    arrow2.classList.remove('upward')
  }
}

closeButton.addEventListener("click",function (){
    mainContainer.classList.add("inactive")
});

cancelButton.addEventListener("click",function (){
    mainContainer.classList.add("inactive")
    arrow.classList.remove('upward')
});



payAmountBtn.addEventListener('click', () => {
  // window.location.href = 'successful.html'
  main.innerHTML = `
  <div class='successfilMsg'>
    <div class="sucessPage">
      <h1>Your Ordered has been received</h1>
      <div class="sucessIcon">
          <i class="fa-solid fa-circle-check"></i>
      </div>
      <h3>Thank you for your purchase !</h3>
      <p>Your order id is: 1234574896</p>
      <p>You will receive an order confirmation email with details of your order.</p>
      <a href="../HTML/index.html">
        <button class="sucess_btn">Continue Shopping</button>
      </a>
    </div>
  </div>
  `
})




