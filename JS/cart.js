let basket = JSON.parse(localStorage.getItem("data")) || [];
// console.log(cartItem, typeof(cartItem));
// console.log(basket.length);

let product = JSON.parse(localStorage.getItem("products"));
// console.log(product, typeof(product));
let cartProducts = document.querySelector("#cart-products");

// to get product delivery date
let todayDate = new Date();
let dateSplit = todayDate.toDateString();
dateSplit = dateSplit.split(" ");
let day = dateSplit[0];
let month = dateSplit[1];
let date = dateSplit[2];

let deliveryDate = new Date(todayDate);
deliveryDate.setDate(todayDate.getDate() + 3);
deliveryDate = deliveryDate.toDateString();
deliveryDate = deliveryDate.split(" ");
let deliveryDay = deliveryDate[0];
let deliveryMonth = deliveryDate[1];
let deliveryDateStart = deliveryDate[2];

let nextDate = new Date(todayDate);
nextDate.setDate(todayDate.getDate() + 6);
nextDate = nextDate.toDateString();
nextDate = nextDate.split(" ");
let finalDeliveryDay = nextDate[0];
let finalDeliveryMonth = nextDate[1];
let finalDeliveryDate = nextDate[2];


document.querySelector('.cart-items-count').innerText = basket.length

document.querySelector('.pincode').innerText = localStorage.getItem('pinCode')

let totalPrice = document.querySelector('.total-cart-amount')



function generateCartItems() {
  if (basket.length != 0) {
    basket.forEach((v) => {
      let {id, quantity} = v
      // console.log(v);
      product.forEach((x) => {
        let { id, imglink, name, dealpricex, MRPx, discountx, savepricex } = x;
        let search = product.find((y) => y.id === id) || []
        if (v.id == x.id) {
          cartProducts.innerHTML += `
          <div class="cart-box">
          <div class="item-details">
            <div class="img-section">
              <img src="${imglink}" alt="">
              <div class="item-counter">
                <i class="fa-solid fa-minus minus" onclick="decrement(${id})"></i>
                <span class="digits" id='${id}'>${v.quantity}</span>
                <i class="fa-solid fa-plus plus" onclick="increment(${id})"></i>
              </div>
            </div>
            <div class="product-details-section">
              <div class="product-details">
                <div class="product-title">${name}</div>
                <div class="product-id">Product ID: ${id}</div>
                <div class='item-total'>₹${quantity * search.dealprice}</div>
              </div>
              <div class="shipping-details">
                <div class="offer-price">${dealpricex}</div>
                <div class="mrp-price">M.R.P.: <span class="mrp strike">${MRPx}</span>
                  <span class="sm-txt">Inclusive of all taxes</span>
                </div>
                <div class="savings">
                  You save: <span class="discount">${discountx}</span>
                  <span class="saving-price">(${savepricex})</span>
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
            <div class="remove-btn" onclick='removeItem(${id})'>Remove</div>
            <div class="wishlist-btn">Move to Wishlist</div>
          </div>
        </div>
          `;
        }
      });
    });
  } else {
    document.querySelector("#empty_screen").classList.remove("inactive");
    document.querySelector(".cart-items-section").classList.add("inactive");
  }
}
generateCartItems();



let increment = (id) => {
  let selectedItem = id;

  let search = basket.find((x) => x.id === selectedItem);

  if (search === undefined) {
    basket.push({
      id: selectedItem,
      quantity: 1,
    });
  } else {
    search.quantity++;
  }
  update(selectedItem);
  // generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));

};

let decrement = (id) => {
  let selectedItem = id;

  let search = basket.find((x) => x.id === selectedItem);

  if (search === undefined) return;
  else if (search.quantity === 0) return;
  else {
    search.quantity--
  }

  update(selectedItem);
  basket.forEach((x) => {
    if(x.quantity == 0){
      basket = basket.filter((x) => x.quantity != 0);
      cartProducts.innerHTML = null
      generateCartItems();
    }
  })
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.quantity;
  totalAmount()
};

let removeItem = (id) => {
  let selectedItem = id
  basket = basket.filter((x) => x.id !== selectedItem)
  cartProducts.innerHTML = null
  generateCartItems()
  totalAmount()
  localStorage.setItem("data", JSON.stringify(basket));
}


let totalAmount = () => {
  if(basket.length !== 0){
    let amount = basket.map((x) => {
      let {id, quantity} = x
      let search = product.find((y) => y.id === id) || []
      return quantity * search.dealprice
    }).reduce((x,y) => x+y, 0)
    document.querySelector('.total').innerHTML = '₹' + amount
    totalPrice.innerHTML = '₹' + amount
    localStorage.setItem('totalPrice', totalPrice.innerHTML = '₹' + amount)
  }
  else return
}
totalAmount()




let clearCart = () => {
  basket = []
  generateCartItems()
  localStorage.setItem('data', JSON.stringify(basket))
}

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
              localStorage.setItem("pinCode", `${e.Pincode}`);
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




// click on checkout-btn and go to that page
let checkOutBtn = document.querySelector('.checkout-btn')

checkOutBtn.addEventListener('click', () => {
  if(localStorage.getItem('userName') != null){
    window.location.href = 'checkout.html'
  }
  else{
    window.location.href = 'login.html'
  }
})



