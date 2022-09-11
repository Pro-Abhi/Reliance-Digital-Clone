let productContainer = document.querySelector(".search");
let filterInput = document.getElementById("search-input");
let sortItems = document.getElementById('sort');


//load the page
    function searchFunc() {
        window.location.href = "index.html";
        
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

    let result = `<div class="watch_item each_item">
                        <a href="#">
                            <div class="product_image">
                                <img src="${images}" alt="${
                                    title
                                }">
                            </div>
                            <div class="product_title title">${title}</div>
                            <div class="stars">&bigstar;&starf;&starf;&starf;&star;</div>
                            <div class="product_price">Offer Price <strong>Rs.${
                              price
                            }</strong></div>
                            <div class="product_original_price">M.R.P :Rs.${
                              price + 524
                            }</div>
                            <button id = "btn">Offer Available</button>
                        </a>
                    </div>`;  
        p_container.innerHTML += result;
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


