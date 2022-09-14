let productID = sessionStorage.getItem("productId");

// create element
let productDetailsContainer = document.querySelector("#productDetails");

let products = JSON.parse(localStorage.getItem("products"));


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


products.forEach((v) => {
  // console.log(v);
  if (v.id == productID) {
    let productDetails = `<div class="first-part">
    <div class="left-side">
      <div class="main-img">
        <img src="${v.imglink}" alt="">
      </div>
      <div class="img-slider">
              <div class="slider-container">
                <div class="slider">
                  <div class="p-img item">
                    <img src="${v.img1}" alt="">
                  </div>
                  <div class="p-img item">
                    <img src="${v.img2}" alt="">
                  </div>
                  <div class="p-img item">
                    <img src="${v.img3}" alt="">
                  </div>
                </div>
                <div class="btn-area">
                  <button class="prev-btn prev" onclick="prev(this)">
                    <i class="fa-solid fa-angle-left"></i>
                  </button>
                  <button class="next-btn next" onclick="next(this)">
                    <i class="fa-solid fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
    </div>
    <div class="right-side">
      <div class="top">
        <div class="p-id">Article ID: ${v.id}</div>
        <div class="thumbnail">
          ${v.name}
        </div>
        <div class="reviews">
          <a href="#customer-review">
            <span class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>
            (${v.Reviews} Reviews)
          </a>
        </div>
      </div>
      <div class="bottom">
        <div class="additional-info">
          <div class="offers">
            <div class="title">Gain more with offers</div>
            <ul class="bt-r-ul">
              <li>Get Cashback upto Rs. 1,000 on Mobikwik Wallet. 
                <a href="">Read T&C</a>
              </li>
            </ul>
          </div>
          <div class="cashbacks">
            <div class="title">Save more with EMI/Cashbacks &nbsp; 
              <a href="">Read T&C</a>
            </div>
            <ul class="mg-l">
              <li>EMIs (Credit Cards) from ₹143.99/month | <a href="">View all standard credit cards EMI options</a></li>
              <li>
                <strong>Warranty : </strong> 1 year manufacturar warranty
              </li>
            </ul>
          </div>
          <div class="features">
            <div class="title">Key Features</div>
            <ul class="mg-l">
              <li>${v.keyFeatures[0].one}</li>
              <li>${v.keyFeatures[0].two}</li>
              <li>${v.keyFeatures[0].three}</li>
              <li>${v.keyFeatures[0].four}</li>
              <li class='hide inactive'>${v.keyFeatures[0].five}</li>
              <li class="sm non-disc">
                <span class="btn toggle-btn" onclick="toggle()">
                  <span class="btn-txt">See more >></span>
                </span>
              </li>
            </ul>
          </div>
          <div class="return-policy">
            <div class="title">Retuen Policy</div>
            <ul class="mg-l">
              <li>Items are eligible for return within 7 days of delivery. 
                <a href="">Read T&C</a>
              </li>
              <li>All accessories, product & packaging need to be return in original condition.</li>
            </ul>
          </div>
        </div>
        <div class="user-related">
          <div class="price-section">
            <ul class="non-disc">
              <li class="offer">
                <span class="price-name">Offer Price : </span>
                <span class="price offer-price">${v.dealpricex}</span>
              </li>
              <li class="mrp">
                <span class="price-name">MRP: </span>
                <span class="price mrp-price">${v.MRPx}</span>
                <span class="tax-txt">(Inclusive all taxes)</span>
              </li>
              <li class="saving">
                You Save : 
                <span class="percetn-count">${v.discountx}</span>
                <span class="price-count">(${v.savepricex})</span>
              </li>
              <li class="emi">
                <span>EMIs(credit card) from ₹143.99/month | </span> 
                <span class="emi-plans">View plans</span>
              </li>
              <li>
                <span class="shipping">FREE Shipping!</span>
              </li>
            </ul>
          </div>
          <div class="shipping-section">
            <form>
              <div class="txt-input">
                <input type="text" class="input" id="pin-code" maxlength="6" autocomplete="off" placeholder=" " required/>
                <label for="pin-code" class="form-label">PIN Code</label>
                <p class="error-msg inactive">
                  <i class="fa-solid fa-triangle-exclamation"></i>
                  Delivery to this PIN code is unavailable, Please try another PIN code
                </p>
                <div class=location-icon>
                  <i class="fa-solid fa-location-dot"></i>
                </div>
              </div>
            </form>
            <div class="shipping-info inactive">
              <div class="shipping-details">
                <div class="ship-date-section">
                  <i class="fa-solid fa-van-shuttle"></i>
                  <span>Standard Delivery: </span>
                  <span class="date">${deliveryDateStart} ${deliveryMonth} (${deliveryDay}) - ${finalDeliveryDate} ${finalDeliveryMonth} (${finalDeliveryDay})</span>
                </div>
                <div class="cod-section">
                  <i class="fa-solid fa-circle-exclamation"></i>
                  COD not available
                </div>
                <div class="delivery-instruction">
                  *Delivery assurance is subject to our delivery locations staying open as per govt. regulations
                </div>
              </div>
              <div class="buttons">
                <button class="add-to-cart" id='add-to-cart' onclick='addToCart(${v.id})'>Add to Cart</button>
                <button class="buy_now" id='buy-now'>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="second-part">
    <div class="tp-b"></div>
    <div class="topics">
      <div class="description">
        <a href="#product-description">Description</a>
      </div>
      <div class="specification">
        <a href="#product-description">Specification</a>
      </div>
      <div class="reviews">
        <a href="#customer-review">Customer Reviews</a>
      </div>
    </div>
    <div id="product-description">
      <h2>Description : </h2>
      <p class="dsc">
        ${v.description[0].seven}
      </p>
      <div class="list">
        <h3 class='sub-dsc'>Specification : </h3>
        <ul>
          <li>${v.description[0].one}</li>
          <li>${v.description[0].two}</li>
          <li>${v.description[0].three}</li>
          <li>${v.description[0].four}</li>
          <li>${v.description[0].five}</li>
          <li>${v.description[0].six}</li>
        </ul>
      </div>
    </div>

    <div class="divider"></div>

    <div id="customer-review">
      <div class="title">
        <span class="section-name">Customer Reviews</span> &nbsp;&nbsp;
        <span class="product-name">(${v.name})</span>
      </div>
      <div class="review-card">
        <div class="review-star">
          <span class="stars-count">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <span class="total-count">4.3/5</span>
          </span>
          <span class="review-count">(10 review)</span>
        </div>
          <div class="star-number">
            <span class="txt">5 star</span>
            <span class="main-bar">
              <span class="color big"></span>
            </span>
            <span class="txt">69.0%</span>
          </div>
          <div class="star-number">
            <span class="txt">4 star</span>
            <span class="main-bar">
              <span class="color small"></span>
            </span>
            <span class="txt">27%</span>
          </div>
          <div class="star-number">
            <span class="txt">3 star</span>
            <span class="main-bar">
              <span class="color none"></span>
            </span>
            <span class="txt">0%</span>
          </div>
          <div class="star-number">
            <span class="txt">2 star</span>
            <span class="main-bar">
              <span class="color none"></span>
            </span>
            <span class="txt">0%</span>
          </div>
          <div class="star-number">
            <span class="txt">1 star</span>
            <span class="main-bar">
              <span class="color very-small"></span>
            </span>
            <span class="txt">2%</span>
          </div>
      </div>
      <div class="review-text-section">
        <div class="user-name">Radharaman Sharma &nbsp;&nbsp;
          <span class="date">-- (9/3/22)</span>
        </div>
        <div class="review-count">
          <i class="fa-solid fa-star"></i>
          4.7/5
        </div>
        <div class="user-location">location - Ahmedabad</div>
        <div class="review-txt">Good Product</div>
      </div>
      <div class="review-text-section">
        <div class="user-name">Pulkit Bhola &nbsp;&nbsp;
          <span class="date">-- (21/1/22)</span>
        </div>
        <div class="review-count">
          <i class="fa-solid fa-star"></i>
          4.8/5
        </div>
        <div class="user-location">location - Jaipur</div>
        <div class="review-txt">Best product value for money design look awesome</div>
      </div>

      <button>See all review</button>
    </div>
  </div>`;

    productDetailsContainer.innerHTML = productDetails;
  }
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


let item = document.querySelector('.hide')
function toggle(){
  if(item.classList.contains('inactive')){
    item.classList.remove('inactive')
    document.querySelector('.btn-txt').innerText = 'See less >>'
  }
  else{
    item.classList.add('inactive')
    document.querySelector('.btn-txt').innerText = 'See more >>'
  }
}



// pincode for shipping
let pinCode = document.querySelector('#pin-code')
let shippingInfo = document.querySelector('.shipping-info')
let errorMsg = document.querySelector('.error-msg')


if(localStorage.getItem('pinCode') != null){
  pinCode.value = localStorage.getItem('pinCode')
}
if(pinCode.value != ''){
  shippingInfo.classList.remove('inactive')
}

pinCode.addEventListener('keyup', () => {
  if((pinCode.value != '') && (pinCode.value.length == 6)){
    fetch(`https://api.postalpincode.in/pincode/${pinCode.value}`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((ele) => {
          let status = ele.Status;
          if (status == "Success"){
            document.querySelector('.location-icon').innerHTML = `<div class='loader'></div>`
            errorMsg.classList.add('inactive')
              setTimeout(() => {
                shippingInfo.classList.remove('inactive')
                document.querySelector('.location-icon').innerHTML = `<i class="fa-solid fa-location-dot"></i>`
              }, 1100)
          }
          else if(status == "Error"){
            errorMsg.classList.remove('inactive')
            shippingInfo.classList.add('inactive')
          }
        })
    })
  }
  else{
    shippingInfo.classList.add('inactive')
  }
})




// let addToCartBtn = document.querySelector('#add-to-cart')

// function addToCart(id){
//     let basket = JSON.parse((localStorage.getItem('data')))

//     if(basket.some((item) => item.id === id)){
      
//     }
//     else{
//       basket.push({
//         id: id,
//         quantity: 1
//       })
//       localStorage.setItem('data', JSON.stringify(basket))
//     }
// }




