let productID = sessionStorage.getItem('productId')

// create element
let productDetailsContainer = document.querySelector('#productDetails') 


let products = JSON.parse(localStorage.getItem('productData'))
console.log(products);

fetch(`https://prakash-dey.github.io/api/relianceDigital.json`)
.then(res => res.json())
.then(data => {
  for(let i in data){
    let pData = data[i]
    pData.forEach(v => {
      if(v.id == productID){
        let productDetails = 
  `<div class="first-part">
    <div class="left-side">
      <div class="main-img">
        <img src="${v.imglink}" alt="">
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
            <ul class="bt-r-ul">
              <li>EMIs (Credit Cards) from ₹143.99/month | <a href="">View all standard credit cards EMI options</a></li>
              <li>
                <strong>Warranty : </strong> 1 year manufacturar warranty
              </li>
            </ul>
          </div>
          <div class="additional-services">
            <div class="title">Additional Services & Warranties 
              <span class="btn toggle-btn" onclick="onOff()">View All</span>
            </div>
            <ul class="bt-r-ul show-hide">
              <li>
                <strong>₹599</strong> for 1 Year: resQ Care Plan (RCP) Extended Warranty for Wearables
              </li>
              <li>
                <strong>₹749</strong> for 1 Year: resQ Care Plan (RCP) Accidental and Liquid Damage Protection for Wearables
              </li>
            </ul>
          </div>
          <div class="features">
            <div class="title">Key Features</div>
            <ul class="bt-r-ul">
              <li>4. 29 cm (1.69 inch) HD Display</li>
              <li>Multi Sports Modes</li>
              <li>Bluetooth Calling</li>
              <li>Voice Assistant</li>
              <div class="show-hide on-off">
                <li>Heart Rate Monitor</li>
                <li>IP67 Waterproof</li>
              </div>
              <li class="sm">
                <span class="btn toggle-btn" onclick="toggle()">
                  <span class="btn-txt">See more >></span>
                </span>
              </li>
            </ul>
          </div>
          <div class="return-policy">
            <div class="title">Retuen Policy</div>
            <ul class="bt-r-ul">
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
                <span class="price offer-price">₹${v.dealpricex}</span>
              </li>
              <li class="mrp">
                <span class="price-name">MRP: </span>
                <span class="price mrp-price">₹${v.MRPx}</span>
                <span class="tax-txt">(Inclusive all taxes)</span>
              </li>
              <li class="saving">
                You Save : 
                <span class="percetn-count">${v.discountx}%</span>
                <span class="price-count">(₹${v.savepricex})</span>
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
                <i class="fa-solid fa-location-dot"></i>
              </div>
            </form>
            <div class="shipping-info">
              <div class="shipping-details">
                <div class="ship-date-section">
                  <i class="fa-solid fa-van-shuttle"></i>
                  <span>Standard Delivery: </span>
                  <span class="date">12 Sep(Mon) - 13 Sep(Tue)</span>
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
                <button class="add-to-cart">Add to Cart</button>
                <button class="buy_now">Buy Now</button>
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
      <div class="reviews">
        <a href="#customer-review">Customer Reviews</a>
      </div>
    </div>
    <div id="product-description">
      <p class="dsc">
        // ${v.description}
      </p>
      <div class="col-2">
        <div class='sub-dsc'>Specification : </div>
        <p class="img-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum minus soluta a, consequuntur quisquam et vero impedit facere est magnam alias commodi sit iure! Exercitationem pariatur labore quae eos quisquam, ipsam, corrupti asperiores minima qui perspiciatis similique quos maiores deleniti aspernatur officia reiciendis eius? Debitis quas vitae optio ipsum distinctio! Expedita, magnam enim non necessitatibus a esse repellat ut nam facere rem rerum! Est atque recusandae, enim minima nihil earum obcaecati eos, doloremque incidunt quaerat ea inventore nulla harum, itaque quod? Cupiditate dolorum dolorem optio illo autem libero, est eum eius consequuntur illum! Quod nulla est porro ex quo pariatur.
        </p>
      </div>
      <div class="col-2">
      <div class='sub-dsc'>More Info : </div>
        <p class="img-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, excepturi! Quisquam sed explicabo non, nisi, dolorem id eum eos, aperiam atque expedita quaerat repellendus eligendi at saepe quia totam odio quos nulla. Quo provident officia sint id voluptatum fugit animi. Labore accusamus quod delectus tenetur perferendis reprehenderit deleniti quasi aut tempore, optio iure, quisquam quibusdam suscipit doloremque est officiis unde?
        </p>
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
  </div>`

  productDetailsContainer.innerHTML = productDetails
      }
    })
  }


  //   let productDetails = `<div class="first-part">
  //   <div class="left-side">
  //     <div class="main-img">
  //       <img src="${i.category.image}" alt="">
  //     </div>
  //   </div>
  //   <div class="right-side">
  //     <div class="top">
  //       <div class="p-id">Article ID: ${i.id}</div>
  //       <div class="thumbnail">
  //         ${i.title}
  //       </div>
  //       <div class="reviews">
  //         <a href="#customer-review">
  //           <span class="stars">
  //             <i class="fa-solid fa-star"></i>
  //             <i class="fa-solid fa-star"></i>
  //             <i class="fa-solid fa-star"></i>
  //             <i class="fa-solid fa-star"></i>
  //             <i class="fa-solid fa-star"></i>
  //           </span>
  //           (1 Reviews)
  //         </a>
  //       </div>
  //     </div>
  //     <div class="bottom">
  //       <div class="additional-info">
  //         <div class="offers">
  //           <div class="title">Gain more with offers</div>
  //           <ul class="bt-r-ul">
  //             <li>Get Cashback upto Rs. 1,000 on Mobikwik Wallet. 
  //               <a href="">Read T&C</a>
  //             </li>
  //           </ul>
  //         </div>
  //         <div class="cashbacks">
  //           <div class="title">Save more with EMI/Cashbacks &nbsp; 
  //             <a href="">Read T&C</a>
  //           </div>
  //           <ul class="bt-r-ul">
  //             <li>EMIs (Credit Cards) from ₹143.99/month | <a href="">View all standard credit cards EMI options</a></li>
  //             <li>
  //               <strong>Warranty : </strong> 1 year manufacturar warranty
  //             </li>
  //           </ul>
  //         </div>
  //         <div class="additional-services">
  //           <div class="title">Additional Services & Warranties 
  //             <span class="btn toggle-btn" onclick="onOff()">View All</span>
  //           </div>
  //           <ul class="bt-r-ul show-hide">
  //             <li>
  //               <strong>₹599</strong> for 1 Year: resQ Care Plan (RCP) Extended Warranty for Wearables
  //             </li>
  //             <li>
  //               <strong>₹749</strong> for 1 Year: resQ Care Plan (RCP) Accidental and Liquid Damage Protection for Wearables
  //             </li>
  //           </ul>
  //         </div>
  //         <div class="features">
  //           <div class="title">Key Features</div>
  //           <ul class="bt-r-ul">
  //             <li>4. 29 cm (1.69 inch) HD Display</li>
  //             <li>Multi Sports Modes</li>
  //             <li>Bluetooth Calling</li>
  //             <li>Voice Assistant</li>
  //             <div class="show-hide on-off">
  //               <li>Heart Rate Monitor</li>
  //               <li>IP67 Waterproof</li>
  //             </div>
  //             <li class="sm">
  //               <span class="btn toggle-btn" onclick="toggle()">
  //                 <span class="btn-txt">See more >></span>
  //               </span>
  //             </li>
  //           </ul>
  //         </div>
  //         <div class="return-policy">
  //           <div class="title">Retuen Policy</div>
  //           <ul class="bt-r-ul">
  //             <li>Items are eligible for return within 7 days of delivery. 
  //               <a href="">Read T&C</a>
  //             </li>
  //             <li>All accessories, product & packaging need to be return in original condition.</li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div class="user-related">
  //         <div class="price-section">
  //           <ul class="non-disc">
  //             <li class="offer">
  //               <span class="price-name">Offer Price : </span>
  //               <span class="price offer-price">₹${offerPrice}</span>
  //             </li>
  //             <li class="mrp">
  //               <span class="price-name">MRP: </span>
  //               <span class="price mrp-price">₹${mrpPrice}</span>
  //               <span class="tax-txt">(Inclusive all taxes)</span>
  //             </li>
  //             <li class="saving">
  //               You Save : 
  //               <span class="percetn-count">${discount}%</span>
  //               <span class="price-count">(₹${saving})</span>
  //             </li>
  //             <li class="emi">
  //               <span>EMIs(credit card) from ₹143.99/month | </span> 
  //               <span class="emi-plans">View plans</span>
  //             </li>
  //             <li>
  //               <span class="shipping">FREE Shipping!</span>
  //             </li>
  //           </ul>
  //         </div>
  //         <div class="shipping-section">
  //           <form>
  //             <div class="txt-input">
  //               <input type="text" class="input" id="pin-code" maxlength="6" autocomplete="off" placeholder=" " required/>
  //               <label for="pin-code" class="form-label">PIN Code</label>
  //               <p class="error-msg inactive">
  //                 <i class="fa-solid fa-triangle-exclamation"></i>
  //                 Delivery to this PIN code is unavailable, Please try another PIN code
  //               </p>
  //               <i class="fa-solid fa-location-dot"></i>
  //             </div>
  //           </form>
  //           <div class="shipping-info">
  //             <div class="shipping-details">
  //               <div class="ship-date-section">
  //                 <i class="fa-solid fa-van-shuttle"></i>
  //                 <span>Standard Delivery: </span>
  //                 <span class="date">12 Sep(Mon) - 13 Sep(Tue)</span>
  //               </div>
  //               <div class="cod-section">
  //                 <i class="fa-solid fa-circle-exclamation"></i>
  //                 COD not available
  //               </div>
  //               <div class="delivery-instruction">
  //                 *Delivery assurance is subject to our delivery locations staying open as per govt. regulations
  //               </div>
  //             </div>
  //             <div class="buttons">
  //               <button class="add-to-cart">Add to Cart</button>
  //               <button class="buy_now">Buy Now</button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // <div class="second-part">
  //   <div class="tp-b"></div>
  //   <div class="topics">
  //     <div class="description">
  //       <a href="#product-description">Description</a>
  //     </div>
  //     <div class="reviews">
  //       <a href="#customer-review">Customer Reviews</a>
  //     </div>
  //   </div>
  //   <div id="product-description">
  //     <p class="dsc">
  //       ${i.description}
  //     </p>
  //     <div class="col-2">
  //       <div class='sub-dsc'>Specification : </div>
  //       <p class="img-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum minus soluta a, consequuntur quisquam et vero impedit facere est magnam alias commodi sit iure! Exercitationem pariatur labore quae eos quisquam, ipsam, corrupti asperiores minima qui perspiciatis similique quos maiores deleniti aspernatur officia reiciendis eius? Debitis quas vitae optio ipsum distinctio! Expedita, magnam enim non necessitatibus a esse repellat ut nam facere rem rerum! Est atque recusandae, enim minima nihil earum obcaecati eos, doloremque incidunt quaerat ea inventore nulla harum, itaque quod? Cupiditate dolorum dolorem optio illo autem libero, est eum eius consequuntur illum! Quod nulla est porro ex quo pariatur.
  //       </p>
  //     </div>
  //     <div class="col-2">
  //     <div class='sub-dsc'>More Info : </div>
  //       <p class="img-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, excepturi! Quisquam sed explicabo non, nisi, dolorem id eum eos, aperiam atque expedita quaerat repellendus eligendi at saepe quia totam odio quos nulla. Quo provident officia sint id voluptatum fugit animi. Labore accusamus quod delectus tenetur perferendis reprehenderit deleniti quasi aut tempore, optio iure, quisquam quibusdam suscipit doloremque est officiis unde?
  //       </p>
  //     </div>
  //   </div>

  //   <div class="divider"></div>

  //   <div id="customer-review">
  //     <div class="title">
  //       <span class="section-name">Customer Reviews</span> &nbsp;&nbsp;
  //       <span class="product-name">(${i.title})</span>
  //     </div>
  //     <div class="review-card">
  //       <div class="review-star">
  //         <span class="stars-count">
  //           <i class="fa-solid fa-star"></i>
  //           <i class="fa-solid fa-star"></i>
  //           <i class="fa-solid fa-star"></i>
  //           <i class="fa-solid fa-star"></i>
  //           <i class="fa-solid fa-star-half-stroke"></i>
  //           <span class="total-count">4.3/5</span>
  //         </span>
  //         <span class="review-count">(10 review)</span>
  //       </div>
  //         <div class="star-number">
  //           <span class="txt">5 star</span>
  //           <span class="main-bar">
  //             <span class="color big"></span>
  //           </span>
  //           <span class="txt">69.0%</span>
  //         </div>
  //         <div class="star-number">
  //           <span class="txt">4 star</span>
  //           <span class="main-bar">
  //             <span class="color small"></span>
  //           </span>
  //           <span class="txt">27%</span>
  //         </div>
  //         <div class="star-number">
  //           <span class="txt">3 star</span>
  //           <span class="main-bar">
  //             <span class="color none"></span>
  //           </span>
  //           <span class="txt">0%</span>
  //         </div>
  //         <div class="star-number">
  //           <span class="txt">2 star</span>
  //           <span class="main-bar">
  //             <span class="color none"></span>
  //           </span>
  //           <span class="txt">0%</span>
  //         </div>
  //         <div class="star-number">
  //           <span class="txt">1 star</span>
  //           <span class="main-bar">
  //             <span class="color very-small"></span>
  //           </span>
  //           <span class="txt">2%</span>
  //         </div>
  //     </div>
  //     <div class="review-text-section">
  //       <div class="user-name">Radharaman Sharma &nbsp;&nbsp;
  //         <span class="date">-- (9/3/22)</span>
  //       </div>
  //       <div class="review-count">
  //         <i class="fa-solid fa-star"></i>
  //         4.7/5
  //       </div>
  //       <div class="user-location">location - Ahmedabad</div>
  //       <div class="review-txt">Good Product</div>
  //     </div>
  //     <div class="review-text-section">
  //       <div class="user-name">Pulkit Bhola &nbsp;&nbsp;
  //         <span class="date">-- (21/1/22)</span>
  //       </div>
  //       <div class="review-count">
  //         <i class="fa-solid fa-star"></i>
  //         4.8/5
  //       </div>
  //       <div class="user-location">location - Jaipur</div>
  //       <div class="review-txt">Best product value for money design look awesome</div>
  //     </div>

  //     <button>See all review</button>
  //   </div>
  // </div>`

  // productDetailsContainer.innerHTML = productDetails
})



// toggle btn
let toggleBtn = document.querySelector('.toggle-btn')
let x = document.querySelector('.show-hide');
let y = document.querySelector('.on-off')

function onOff(){
  if(x.style.display == 'block'){
    x.style.display = 'none'
    toggleBtn.innerHTML = 'View more'
  }
  else{
    x.style.display = 'block'
    toggleBtn.innerHTML = 'View less'
  }
}

function toggle(){
  if(y.style.display == 'block'){
    y.style.display = 'none'
    document.querySelector('.btn-txt').innerHTML = 'See more >>'
  }
  else{
    y.style.display = 'block'
    document.querySelector('.btn-txt').innerHTML = 'See less >>'
  }
}



// pin-code
// let inputScreen = document.querySelector("#pin-code");
// let errorMsg = document.querySelector(".error-msg");
// let inputLabel = document.querySelector(".txt-input label");






