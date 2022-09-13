// Query Selectors
let main = document.querySelector("#main");
let SearchBtn =document.getElementById("searchBtn");
let filterInput = document.getElementById("search-input");
let sortItemsByAsc = document.querySelector(".asc");
let sortItemsByDec = document.querySelector(".dec");
let mainContainer = document.querySelector(".search_products");

//load the page
    // function searchFunc() {
    //     window.location.href = "product_search.html";    
    // }

    SearchBtn.addEventListener('click',()=>{
        console.log(filterInput.value);
        main.innerHTML="";
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data =>{
            for(let value of data){
                addPage();
                addElement(value);
            }
        })
    })

    function addPage(){
    let result = `
    <section id="search_section">
      <div class="search_breadcrumb">
        <i class="fa-solid fa-house"></i> >${filterInput.value}> Search
      </div>
    </section>

    <section class="product_search_container">
      <div class="left_container">
        <div class="filter_title">Filters</div>
        <div class="filter_price">
          <h4>Price</h4>
          <div class="sliderRange">
            <div class="slidecontainer">
              <input type="range" min="1" max="100000" value="500" class="slider" id="myRange" />
              <p>Range: <span id="price"></span></p>
            </div>
          </div>
        </div>
        <div class="filter_availability">
          <h4>Availability</h4>
          <input type="checkbox" name="check" id="check" />
          <label for="check"> Exclude out of Stock</label>
        </div>
        <div class="filter_category">
          <h4>Caregory</h4>
          <ul class="list">
            <li>
              <input type="checkbox" name="mg" id="mg" />
              <label for="mg">Mixers Grinders</label>
            </li>
            <li>
              <input type="checkbox" name="rf" id="rf" />
              <label for="rf">Refrigerators</label>
            </li>
            <li>
              <input type="checkbox" name="wm" id="wm" />
              <label for="wm">Washing Machines </label>
            </li>
            <li>
              <input type="checkbox" name="gs" id="gs" />
              <label for="gs">Gas Stove </label>
            </li>
            <li>
              <input type="checkbox" name="kh" id="kh" />
              <label for="kh">Kitchen Hobs </label>
            </li>
            <li>
              <input type="checkbox" name="efm" id="efm" />
              <label for="efm">Electric Flour Mills </label>
            </li>
            <li>
              <input type="checkbox" name="ac" id="ac" />
              <label for="ac">Air Conditioners </label>
            </li>
            <li>
              <input type="checkbox" name="sac" id="sac" />
              <label for="sac">Split Air Conditioners </label>
            </li>
            <li>
              <input type="checkbox" name="rc" id="rc" />
              <label for="rc">Rice Cookers </label>
            </li>
          </ul>
        </div>
        <a href="#" class="cta-btn">See more</a>
        <div class="filter_brand">
          <h4>Brand</h4>
          <ul class="list">
            <li>
              <input type="checkbox" name="Haier" id="Haier" />
              <label for="Haier">Haier</label>
            </li>
            <li>
              <input type="checkbox" name="Bosch" id="Bosch" />
              <label for="Bosch">Bosch</label>
            </li>
            <li>
              <input type="checkbox" name="Philips" id="Philips" />
              <label for="Philips">Philips</label>
            </li>
            <li>
              <input type="checkbox" name="Preethi" id="Preethi" />
              <label for="Preethi">Preethi</label>
            </li>
            <li>
              <input type="checkbox" name="Butterfly" id="Butterfly" />
              <label for="Butterfly">Butterfly</label>
            </li>
            <li>
              <input type="checkbox" name="Bajaj" id="Bajaj" />
              <label for="Bajaj">Bajaj</label>
            </li>
            <li>
              <input type="checkbox" name="Panasonic" id="Panasonic" />
              <label for="Panasonic">Panasonic</label>
            </li>
            <li>
              <input type="checkbox" name="NATRAJ" id="NATRAJ" />
              <label for="NATRAJ">NATRAJ</label>
            </li>
          </ul>
        </div>
        <a href="#" class="cta-btn">See more</a>
      </div>
      <div class="right_container">
        <div class="search_result_title">
          <div class="search_heading">
            <h4>Result</h4>
          </div>
          <div class="result_sort">
            <span>Sort By Price:</span>
            <button class="asc">
              <i class="fa-solid fa-arrow-down"></i>
            </button>
            <button class="dec"><i class="fa-solid fa-arrow-up"></i></button>
          </div>
        </div>
        <div class="search_products"></div>
      </div>
    </section>`;
            main.innerHTML = result;

}

function addElement(value){
    let {images, title , price } = value;
    let fetchData = 
    `<div class="item each_item">
    <div class="product_image">
        <img src="${images}" alt="${title}">
    </div>
    <div class="product_title title">${title}</div>
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
        <span class="price big">₹${price}</span>
    </div>
    <div class="mrp">
        <span class="name">M.R.P: </span>
        <span class="price strike">₹${price+600}</span>
    </div>
    
    </div>
    <div class="offer-btn">Offer available</div>
    </div>`;
     mainContainer.innerHTML += fetchData;
}


// Search on input
//     filterInput.addEventListener('click',()=>{
//         fetch('https://api.escuelajs.co/api/v1/products')
//         .then(res => res.json())
//         .then(json =>{ 

//             for (let value of json){
//                 addElement(value)
//             }         
            
//         });   
//     })

// add event listener
// filterInput.addEventListener('keyup', filterProducts);

// function filterProducts(){
//     let filterValue = filterInput.value.toUpperCase();
//     let item = mainContainer.querySelectorAll('.each_item')

//     for (let i = 0; i < item.length; i++){
//         let span = item[i].querySelector('.title');

//         if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
//             item[i].style.display = "initial";
//         }else{
//             item[i].style.display = "none";
//         }

//     }
// }




// let ctaBtn = Array.from(document.querySelectorAll(".cta-btn"));
// let cat = document.querySelector(".filter_category");

// ctaBtn.forEach(element => {
//     element.addEventListener('click',()=>{
//         cat.classList.toggle("f_active");

//         if(element.innerHTML== "See more"){
//             element.innerHTML = "See less";
//         }
//         else{
//             element.innerHTML = "See more"
//         }
//     })
// });

// sortItemsByAsc.addEventListener("click",()=>{
    
//     mainContainer.innerHTML= "";
//     fetch('https://api.escuelajs.co/api/v1/products')
//         .then(res => res.json())
//         .then((data)=>{
//             data.sort((a,b)=>{
//                 return a.price - b.price
//             })
   
//             data.forEach(element => {
//                 addElement(element)   
//             }); 

//         })
    
// })

// sortItemsByDec.addEventListener("click",()=>{
    
//     mainContainer.innerHTML= "";
//     fetch('https://api.escuelajs.co/api/v1/products')
//         .then(res => res.json())
//         .then((data)=>{
//             data.sort((a,b)=>{
//                 return b.price - a.price
//             })
   
//             data.forEach(element => {
//                 addElement(element)   
//             }); 

//         })
    
// })

// Product Slider Range

// var slider = document.getElementById("myRange");
// var output = document.getElementById("price");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }