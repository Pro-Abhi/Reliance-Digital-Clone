// for login-sign-up
// get userName after login

let userName = document.getElementById("user_Name");
if (localStorage.getItem("userName") != null) {
  userName.innerHTML = localStorage.getItem("userName");
}



function logincheck() {
  if ((localStorage.getItem("userName") != null)) {
    window.location.href = "profile.html";
  } else {
    window.location.href = "login.html";
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



// add-to-cart functionalities
let addToCartBtn = document.querySelector('#add-to-cart')

function addToCart(id){
    let basket = JSON.parse((localStorage.getItem('data')))

    if(basket.some((item) => item.id === id)){
      // window.location.href = 'cart.html'
      increment()
    }
    else{
      basket.push({
        id: id,
        quantity: 1
      })
      localStorage.setItem('data', JSON.stringify(basket))
    }

    document.getElementById('add-to-cart').innerHTML = `<img src='../Assets/processing-circle.gif'>`
    setTimeout(() => {
      document.getElementById('add-to-cart').innerHTML = `Add to Cart`
    }, 1000)
}





