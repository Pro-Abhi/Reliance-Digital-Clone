// slider js 
const slides = document.getElementsByClassName("slide");
const slider__btns = document.querySelectorAll(".slider__navigation__btn");
const slides2 = document.getElementsByClassName("vivo__galaxy__slide");


// console.log(slider__btns);
let flag = 0;
let currentSlide = 1;

function controller(x){
    flag = flag + x;
    slidesShow(flag);
}
slidesShow(flag);

function slidesShow(num){
    if(num == slides.length){
       flag = 0;
       num = 0;
    }
    if(num<0){
        flag = slides.length-1;
        num = slides.length-1;
    }
    for(let y of slides){
        y.style.display = "none";
       }
    slides[num].style.display = "block";
    
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
      let result = `<div class="item cloth_item sliding">
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
                    document.querySelector(".clothes_slider").innerHTML += result;
                    document.querySelector(".clothes_slider2").innerHTML += result;
                    document.querySelector(".clothes_slider3").innerHTML += result;
    }
  });


  // slider - code
function next(e){
  let ele = e.parentElement.parentElement.children[0]
  let item = ele.getElementsByClassName('sliding')
  ele.append(item[0])
}

function prev(e){
  let ele = e.parentElement.parentElement.children[0]
  let item = ele.getElementsByClassName('sliding')
  ele.prepend(item[item.length - 1])
}


