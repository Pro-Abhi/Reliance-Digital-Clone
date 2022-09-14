// slider js 
const slides = document.getElementsByClassName("slide");
const slider__btns = document.querySelectorAll(".slider__navigation__btn");

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

let category = JSON.parse(localStorage.getItem('productCategories'))
let laptops = category.laptop
// laptop-products screen
laptops.forEach(v => {
  let result = `<div class="item watch_item">
                  <div class="product_image">
                      <img src="${v.imglink}" alt="smartWatch">
                  </div>
                  <a href='../HTML/product-details.html'>
                    <div class="product_title" id='${v.id}'>${v.name}</div>
                  </a>
                  <div class="review-section">
                    <span class="stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </span>
                    <span class="review-count">(${v.Reviews} reviews)</span>
                  </div>
                  <div class="price-section">
                    <div class="offer">
                      <span class="name">Offer Price: </span>
                      <span class="price big">${v.dealpricex}</span>
                    </div>
                    <div class="mrp">
                      <span class="name">M.R.P: </span>
                      <span class="price strike">${v.MRPx}</span>
                    </div>
                    <div class="saving-detail">
                      <span class="name">You Save: </span>
                      <span class="percent">${v.discountx}</span><span class="num">(${v.savepricex})</span>
                    </div>
                  </div>
                  <div class="offer-available-tag">Offer available</div>
                </div>`;
    document.querySelector('.laptops').innerHTML += result;
    document.querySelector('.laptops2').innerHTML += result;
    document.querySelector('.laptops3').innerHTML += result;
})



// showDetails
let productContainer = [...document.querySelectorAll(".product-slider")];
function showDetails(e) {
  if (e.target.classList[0] == "product_title") {
    let id = e.target.id;
    sessionStorage.setItem("productId", id);
  }
}
productContainer.forEach((v) => {
  v.addEventListener("click", showDetails);
});


  

  // slider - code
function next(e){
  let ele = e.parentElement.parentElement.children[0]
  let item = ele.getElementsByClassName('item')
  ele.append(item[0])
}

function prev(e){
  let ele = e.parentElement.parentElement.children[0]
  let item = ele.getElementsByClassName('item')
  ele.prepend(item[item.length - 1])
}


