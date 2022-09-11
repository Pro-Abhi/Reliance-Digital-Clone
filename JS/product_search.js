let productContainer = document.querySelector(".search");
let filterInput = document.getElementById("search-input");
let sortItems = document.getElementById('sort');

// console.log(productContainer,filterInput,sortItems);

//load the page
    function searchFunc() {
        window.location.href = "product_search.html";
        
    }

    filterInput.addEventListener('click',()=>{

        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(json =>{
            
            // getdata(json) 

            for (let value of json){
                // console.log(value)
                addElement(value)

            }           
            
        });   
    })


// add event listener
filterInput.addEventListener('keyup', filterProducts);

function filterProducts(){
    let filterValue = filterInput.value.toUpperCase();
    let item = productContainer.querySelectorAll('.each_item')

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

    let result = `<div class="item watch_item">
    <a href="#">
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
          <div class="saving-detail">
            <span class="name">You Save: </span>
          </div>
        </div>
        <div class="offer-available-tag">Offer available</div>
    </a>
</div>`;
productContainer.innerHTML += result;
}


sortItems.addEventListener("click",()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then((data)=>{
            data.sort((a,b)=>{
                return a.price - b.price
            })
            
            console.log(data)
            
            data.forEach(element => {
                productContainer.innerHTML= null;

                console.log(element.price)
                addElement(value)
                
               
            }); 

        })
})


