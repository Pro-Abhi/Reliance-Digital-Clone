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
      watchSlider.innerHTML += result;
    }
  });

// Slider Part
const main1 = [...document.querySelectorAll(".watches_slider")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

main1.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

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

// Slider Part
const slider = [...document.querySelectorAll(".clothes_slider")];
const nextBtn = [...document.querySelectorAll(".next-btn")];
const prevBtn = [...document.querySelectorAll(".prev-btn")];

slider.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  prevBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
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

// Slider Part
const slider2 = [...document.querySelectorAll(".furniture_slider")];
const nextBtn2 = [...document.querySelectorAll(".next-btn2")];
const prevBtn2 = [...document.querySelectorAll(".prev-btn2")];

slider2.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  // console.log(containerDimensions, containerWidth);

  nextBtn2[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  prevBtn2[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
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

// Slider Part
const slider3 = [...document.querySelectorAll(".shoes_slider")];
const nextBtn3 = [...document.querySelectorAll(".next-btn3")];
const prevBtn3 = [...document.querySelectorAll(".prev-btn3")];

slider3.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  // console.log(containerDimensions, containerWidth);

  nextBtn3[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  prevBtn3[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

// bottom-product-slider
const slider4 = [...document.querySelectorAll(".products-category")];
// console.log(slider4);
const nextBtn4 = [...document.querySelectorAll(".nxt-btn4")];
const prevBtn4 = [...document.querySelectorAll(".pre-btn4")];

slider4.forEach((item, i) => {
  // console.log(item);
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtn4[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  prevBtn4[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

// get userName after login
let UserName = document.getElementById("user_Name");
if (localStorage.getItem("userName") != null) {
  UserName.innerHTML = localStorage.getItem("userName");
}
// let userData = localStorage.getItem("userData")
// // userData.filter(v => console.log(v))
// console.log(userData, Array.isArray(userData));


function logincheck() {
  if (localStorage.getItem("userName") != null) {
    window.location.href = "profile.html";
  } else {
    window.location.href = "login.html";
  }
}

