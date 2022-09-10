let p_container = document.querySelector(".search_products");
let filterInput = document.getElementById("search-input");

filterInput.addEventListener('click',()=>{

    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(json =>{
        
        for (let value of json){
            addElement(p_container, value)
        }
        
    });

})


// add event listener
filterInput.addEventListener('keyup', filterProducts);

function filterProducts(){
    let filterValue = filterInput.value.toUpperCase();
    let item = p_container.querySelectorAll('.each_item')

    for (let i = 0; i < item.length; i++){
        let span = item[i].querySelector('.title');

        if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            item[i].style.display = "initial";
        }else{
            item[i].style.display = "none";
        }

    }
}

function addElement(p_container, value){

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

function searchFunc() {
    window.location.href = "index.html";
}