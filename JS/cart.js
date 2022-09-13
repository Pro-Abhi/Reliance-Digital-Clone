let cartItem = JSON.parse(localStorage.getItem('cartArray'))
// console.log(cartItem, typeof(cartItem));

let product = JSON.parse(localStorage.getItem('products'))
// console.log(product, typeof(product));
let cartProducts = document.querySelector('#cart-products')

// to get product delivery date
let todayDate = new Date()
let dateSplit = todayDate.toDateString()
dateSplit = dateSplit.split(' ')
let day = dateSplit[0]
let month = dateSplit[1]
let date = dateSplit[2]

let deliveryDate = new Date(todayDate)
deliveryDate.setDate(todayDate.getDate() + 3)
deliveryDate = deliveryDate.toDateString()
deliveryDate = deliveryDate.split(' ')
let deliveryDay = deliveryDate[0]
let deliveryMonth = deliveryDate[1]
let deliveryDateStart = deliveryDate[2]


let nextDate = new Date(todayDate)
nextDate.setDate(todayDate.getDate() + 6)
nextDate = nextDate.toDateString()
nextDate = nextDate.split(' ')
let finalDeliveryDay = nextDate[0]
let finalDeliveryMonth = nextDate[1]
let finalDeliveryDate = nextDate[2]


function showCart(){
  cartItem.forEach(v => {
    console.log(v);
    product.forEach(x => {
      // console.log(x);
      if(v.id == x.id){
        cartProducts.innerHTML += `
        <div class="cart-box">
        <div class="item-details">
          <div class="img-section">
            <img src="${x.imglink}" alt="">
            <div class="item-counter">
              <i class="fa-solid fa-minus minus" onclick="decrement()"></i>
              <span class="digits">${v.quantity}</span>
              <i class="fa-solid fa-plus plus" onclick="increment()"></i>
            </div>
          </div>
          <div class="product-details-section">
            <div class="product-details">
              <div class="product-title">${x.name}</div>
              <div class="product-id">Product ID: ${x.id}</div>
            </div>
            <div class="shipping-details">
              <div class="offer-price">${x.dealpricex}</div>
              <div class="mrp-price">M.R.P.: <span class="mrp strike">${x.savepricex}</span>
                <span class="sm-txt">Inclusive of all taxes</span>
              </div>
              <div class="savings">
                You save: <span class="discount">${x.discountx}</span>
                <span class="saving-price">(${x.savepricex})</span>
              </div>
              <div class="free-ship">Free Shipping</div>
              <div class="delivery-status">
                <i class="fa-solid fa-van-shuttle"></i> Standard Delivery: 
                <span class="date">${deliveryDateStart} ${deliveryMonth} (${deliveryDay}) - ${finalDeliveryDate} ${finalDeliveryMonth} (${finalDeliveryDay})</span>
              </div>
              <div class="guideline">
                *Delivery assurance is subject to our delivery locations staying open as per govt. regulations
              </div>
            </div>
          </div>
        </div>
        <div class="btns">
          <div class="remove-btn">Remove</div>
          <div class="wishlist-btn">Move to Wishlist</div>
        </div>
      </div>
        `
      }
    })
  })
}
showCart()


// get location
// for pin-code search
let userPinCode = document.querySelector(".user-pin-code");
let popUp = document.querySelector(".pop-up");
let inputScreen = document.querySelector("#pinCode");
let closeBtn = document.querySelector(".close");
let submitBtn = document.querySelector(".apply");
let foundMsg = document.querySelector(".found-msg");
let errorMsg = document.querySelector(".error-msg");
let inputLabel = document.querySelector(".txt-input label");

userPinCode.addEventListener("click", () => {
  popUp.classList.remove("inactive");
  inputScreen.value = "";
  errorMsg.innerHTML = "";
  inputScreen.classList.remove("alert");
  inputLabel.classList.remove("alert");
});

closeBtn.addEventListener("click", () => {
  popUp.classList.add("inactive");
});

submitBtn.addEventListener("click", () => {
  if (inputScreen.value.length < 6) {
    popUp.classList.remove("inactive");
    errorMsg.innerHTML = `Please enter correct PIN Code`;
    inputScreen.classList.add("alert");
    inputLabel.classList.add("alert");
  } else {
    fetch(`https://api.postalpincode.in/pincode/${inputScreen.value}`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((ele) => {
          // console.log(ele);
          let status = ele.Status;
          let PostOffice = ele.PostOffice;
          if (status == "Success") {
            PostOffice.forEach((e) => {
              // console.log(e);
              let PinCode = `${e.District} ${e.Pincode}`;
              foundMsg.innerText = PinCode;

              localStorage.setItem("location", PinCode);
            });
            popUp.classList.add("inactive");
          } else if (status == "Error") {
            popUp.classList.remove("inactive");
            errorMsg.innerText = `Invalid Pincode`;
            inputScreen.classList.add("alert");
            inputLabel.classList.add("alert");
          }
        });
      });
    errorMsg.innerHTML = `<div class="loader"></div>`;
  }
});

inputScreen.addEventListener("focus", () => {
  errorMsg.innerHTML = "";
  inputScreen.classList.remove("alert");
  inputLabel.classList.remove("alert");
});

// get user location after page reload if its present in localstorage
function getLocation() {
  if (localStorage.getItem("location") != null) {
    foundMsg.innerHTML = localStorage.getItem("location");
  }
}
window.onload = getLocation();
