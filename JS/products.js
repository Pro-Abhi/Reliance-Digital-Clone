// slider js 
const slides = document.getElementsByClassName("slide");
const slider__btns = document.querySelectorAll(".slider__navigation__btn");
const slides2 = document.getElementsByClassName("vivo__galaxy__slide");


// console.log(slider__btns);
let flag = 0;
let currentSlide = 1;
slider__btns.forEach(element => {
    // console.log(element);
  });


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