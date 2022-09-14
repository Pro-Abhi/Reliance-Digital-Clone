// Query Selectors
let main = document.getElementById('main');
let SearchBtn =document.getElementById("searchBtn");
filterInput = document.getElementById("search-input");
let footer = document.querySelector("footer");

    SearchBtn.addEventListener('click',()=>{
        main.innerHTML="";
        footer.style.display="none";
        addPage();
        fetch(`https://prakash-dey.github.io/api/relianceDigital.json`)
        .then(response => response.json())
        .then(data =>{
        
            data.forEach(element => {
                if(element.name.includes(filterInput.value)){
                  addElement(element);            
                }
            });
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
            <button class="asc" id="btnAsc">
              <i class="fa-solid fa-arrow-down"></i>
            </button>
            <button class="dec" id="btnDec"><i class="fa-solid fa-arrow-up"></i></button>
          </div>
        </div>
        <div class="search_products" id="main_container"></div>
      </div>
    </section>`;
            main.innerHTML = result;      
}

// Adding Elements

function addElement(data){
    let mainContainer = document.getElementById("main_container");
    let fetchData = 
    `<div class="item each_item">
    <div class="product_image">
        <img src="${data.imglink}" alt="${data.name}">
    </div>
    <div class="product_title title">${data.name}</div>
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
        <span class="price big">₹${data.dealpricex}</span>
    </div>
    <div class="mrp">
        <span class="name">M.R.P: </span>
        <span class="price strike">₹${data.MRPx}</span>
    </div>
    
    </div>
    <div class="offer-btn">Offer available</div>
    </div>`;
     mainContainer.innerHTML += fetchData;

}
