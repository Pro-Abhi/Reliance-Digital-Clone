// pin-code
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

// slider js
const slides = document.getElementsByClassName("slide");
const slider__btns = document.querySelectorAll(".slider__navigation__btn");
const slides2 = document.getElementsByClassName("vivo__galaxy__slide");

// console.log(slider__btns);
let flag = 0;
let currentSlide = 1;
slider__btns.forEach((element) => {
  // console.log(element);
});

function controller(x) {
  flag = flag + x;
  slidesShow(flag);
}

slidesShow(flag);

function slidesShow(num) {
  if (num == slides.length) {
    flag = 0;
    num = 0;
  }
  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }
  for (let y of slides) {
    y.style.display = "none";
  }
  slides[num].style.display = "block";
}

// slider-2
let flag2 = 0;
function controller2(y) {
  flag2 = flag2 + y;
  slideShow2(flag2);
}
slideShow2(flag2);

function slideShow2(num2) {
  if (num2 == slides2.length) {
    num2 = 0;
    flag2 = 0;
  }
  if (num2 < 0) {
    num2 = slides2.length - 1;
    flag2 = slides2.length - 1;
  }
  for (let y of slides2) {
    y.style.display = "none";
  }
  slides2[num2].style.display = "block";
}

// Watches-products Slider Starts
let watchSlider = document.querySelector(".watches_slider");

fetch("https://api.escuelajs.co/api/v1/categories/2/products")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < 20; i++) {
      let offerPrice = data[i].price;
      let mrpPrice = offerPrice + 1500;
      let discount = Math.round((offerPrice * 100) / mrpPrice);
      let saving = mrpPrice - offerPrice;
      let result = `<div class="item watch_item">
                        <a href="#">
                            <div class="product_image">
                                <img src="${data[i].images[0]}" alt="${data[i].title}">
                            </div>
                            <div class="product_title">${data[i].title}</div>
                            <div class="review-section">
                              <span class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                              </span>
                              <span class="review-count">(10 reviews)</span>
                            </div>
                            <div class="price-section">
                              <div class="offer">
                                <span class="name">Offer Price: </span>
                                <span class="price big">₹${offerPrice}</span>
                              </div>
                              <div class="mrp">
                                <span class="name">M.R.P: </span>
                                <span class="price strike">₹${mrpPrice}</span>
                              </div>
                              <div class="saving-detail">
                                <span class="name">You Save: </span>
                                <span class="percent">${discount}%</span><span class="num">(₹${saving})</span>
                              </div>
                            </div>
                            <div class="offer-available-tag">Offer available</div>
                        </a>
                    </div>`;
      watchSlider.innerHTML += result;
    }
  });

// slider - code
function next(x){
  let ele = x.parentElement.parentElement.children[0]
  let item = ele.getElementsByClassName('item')
  ele.append(item[0])
}

function prev(x){
  let ele = x.parentElement.parentElement.children[0]
  let item = ele.getElementsByClassName('item')
  ele.prepend(item[item.length - 1])
}


// Clothes-products Slider
let clothSlider = document.querySelector(".clothes_slider");

fetch("https://api.escuelajs.co/api/v1/categories/1/products")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < 20; i++) {
      let offerPrice = data[i].price;
      let mrpPrice = offerPrice + 1500;
      let discount = Math.round((offerPrice * 100) / mrpPrice);
      let saving = mrpPrice - offerPrice;
      // console.log(offerPrice, mrpPrice, discount, saving);
      let result = `<div class="item cloth_item">
                        <a href="#">
                            <div class="product_image">
                                <img src="${data[i].images[1]}" alt="${data[i].title}">
                            </div>
                            <div class="product_title">${data[i].title}</div>
                            <div class="review-section">
                              <span class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                              </span>
                              <span class="review-count">(10 reviews)</span>
                            </div>
                            <div class="price-section">
                              <div class="offer">
                                <span class="name">Offer Price: </span>
                                <span class="price big">₹${offerPrice}</span>
                              </div>
                              <div class="mrp">
                                <span class="name">M.R.P: </span>
                                <span class="price strike">₹${mrpPrice}</span>
                              </div>
                              <div class="saving-detail">
                                <span class="name">You Save: </span>
                                <span class="percent">${discount}%</span><span class="num">(₹${saving})</span>
                              </div>
                            </div>
                            <div class="offer-available-tag">Offer available</div>
                        </a>
                    </div>`;
      clothSlider.innerHTML += result;
    }
  });

// furniture-product slider
let furnitureSlider = document.querySelector(".furniture_slider");

fetch("https://api.escuelajs.co/api/v1/categories/3/products")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < 20; i++) {
      let offerPrice = data[i].price;
      let mrpPrice = offerPrice + 1500;
      let discount = Math.round((offerPrice * 100) / mrpPrice);
      let saving = mrpPrice - offerPrice;
      // console.log(offerPrice, mrpPrice, discount, saving);
      let result = `<div class="item furniture_item">
                        <a href="#">
                            <div class="product_image">
                                <img src="${data[i].images[1]}" alt="${data[i].title}">
                            </div>
                            <div class="product_title">${data[i].title}</div>
                            <div class="review-section">
                              <span class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                              </span>
                              <span class="review-count">(10 reviews)</span>
                            </div>
                            <div class="price-section">
                              <div class="offer">
                                <span class="name">Offer Price: </span>
                                <span class="price big">₹${offerPrice}</span>
                              </div>
                              <div class="mrp">
                                <span class="name">M.R.P: </span>
                                <span class="price strike">₹${mrpPrice}</span>
                              </div>
                              <div class="saving-detail">
                                <span class="name">You Save: </span>
                                <span class="percent">${discount}%</span><span class="num">(₹${saving})</span>
                              </div>
                            </div>
                            <div class="offer-available-tag">Offer available</div>
                        </a>
                    </div>`;
      furnitureSlider.innerHTML += result;
    }
  });


// shoes-product slider
let shoesSlider = document.querySelector(".shoes_slider");

fetch("https://api.escuelajs.co/api/v1/categories/4/products")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < 20; i++) {
      let offerPrice = data[i].price;
      let mrpPrice = offerPrice + 1500;
      let discount = Math.round((offerPrice * 100) / mrpPrice);
      let saving = mrpPrice - offerPrice;
      let result = `<div class="item furniture_item">
                        <a href="#">
                            <div class="product_image">
                                <img src="${data[i].images[1]}" alt="${data[i].title}">
                            </div>
                            <div class="product_title">${data[i].title}</div>
                            <div class="review-section">
                              <span class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                              </span>
                              <span class="review-count">(10 reviews)</span>
                            </div>
                            <div class="price-section">
                              <div class="offer">
                                <span class="name">Offer Price: </span>
                                <span class="price big">₹${offerPrice}</span>
                              </div>
                              <div class="mrp">
                                <span class="name">M.R.P: </span>
                                <span class="price strike">₹${mrpPrice}</span>
                              </div>
                              <div class="saving-detail">
                                <span class="name">You Save: </span>
                                <span class="percent">${discount}%</span><span class="num">(₹${saving})</span>
                              </div>
                            </div>
                            <div class="offer-available-tag">Offer available</div>
                        </a>
                    </div>`;
      shoesSlider.innerHTML += result;
    }
  });



// get userName after login
let nameData;
let user = JSON.parse(localStorage.getItem('userData'))
  for(let i of user){
    nameData = i.firstName
  }
console.log(nameData);


let userName = document.getElementById("user_Name");
if (localStorage.getItem("userName") != null) {
  userName.innerHTML = localStorage.getItem("userName");
}
else if(localStorage.getItem('userName') == null){
  userName.innerHTML = nameData
}



function logincheck() {
  if ((localStorage.getItem("userName") != null) || (nameData != null)) {
    window.location.href = "profile.html";
  } else {
    window.location.href = "login.html";
  }
}

