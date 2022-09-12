let ctaBtn = Array.from(document.querySelectorAll(".cta-btn"));
let cat = document.querySelector(".filter_category");

ctaBtn.forEach(element => {
    element.addEventListener('click',()=>{
        cat.classList.toggle("f_active");

        if(element.innerHTML== "See more"){
            element.innerHTML = "See less";
        }
        else{
            element.innerHTML = "See more"
        }
    })
});


// Product Search Part

let SearchBtn = document.querySelector(".viewAll");
let filterInput = document.getElementById("search-input");
let sortItemsByAsc = document.querySelector(".asc");
let sortItemsByDec = document.querySelector(".dec");
let mainContainer = document.querySelector(".search_products");


//load the page
    function searchFunc() {
        window.location.href = "product_search.html";
        
    }

    filterInput.addEventListener('click',()=>{

        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(json =>{ 

            for (let value of json){
                addElement(value)
            }         
            
        });   
    })

// add event listener
filterInput.addEventListener('keyup', filterProducts);

function filterProducts(){
    let filterValue = filterInput.value.toUpperCase();
    let item = mainContainer.querySelectorAll('.each_item')

    for (let i = 0; i < item.length; i++){
        let span = item[i].querySelector('.title');

        if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            item[i].style.display = "initial";
        }else{
            item[i].style.display = "none";
        }

    }
}

function addElement(value){

    let { images, title,price } = value;
    let result = `<div class="item each_item">
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
            mainContainer.innerHTML += result;
}


sortItemsByAsc.addEventListener("click",()=>{
    
    mainContainer.innerHTML= "";
    fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then((data)=>{
            data.sort((a,b)=>{
                return a.price - b.price
            })
   
            data.forEach(element => {

                // console.log(element.price)
                addElement(element)   
            }); 

        })
    
})

sortItemsByDec.addEventListener("click",()=>{
    
    mainContainer.innerHTML= "";
    fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then((data)=>{
            data.sort((a,b)=>{
                return b.price - a.price
            })
   
            data.forEach(element => {
                addElement(element)   
            }); 

        })
    
})

// Product Slider Range

var slider = document.getElementById("myRange");
var output = document.getElementById("price");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}