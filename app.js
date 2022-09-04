// slider js 
const slides = document.getElementsByClassName("slide");
// console.log(slides);
let flag = 0;

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