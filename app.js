// slider js 
const slides = document.getElementsByClassName("slide");
const slider__btns = document.querySelectorAll(".slider__navigation__btn");
const slides2 = document.getElementsByClassName("vivo__galaxy__slide");
const slides3 = document.getElementsByClassName("explore__products__slide");


// console.log(slider__btns);
let flag = 0;
let currentSlide = 1;
slider__btns.forEach(element => {

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

// slider2
let flag2 = 0;
function controller2(y){
    flag2 = flag2 + y;
    slideShow2(flag2);
}
slideShow2(flag2);

function slideShow2(num2){
    if(num2 == slides2.length){
        num2=0;
        flag2=0;
    }
    if(num2 < 0){
     num2=slides2.length-1;
     flag2=slides2.length-1;
    }
    for(let y of slides2){
        y.style.display = "none";
       }
    slides2[num2].style.display = "block";
}

// slider3 js 

// let flag3 = 0;
// function controller3(z){
//     flag3 = flag3 + z;
//     slideShow3(flag3);
// }
// slideShow3(flag3);

// function slideShow3(num3){
//     if(num3 == slides3.length){
//         num3=0;
//         flag3=0;
//     }
//     if(num3 < 0){
//      num3=slides3.length-1;
//      flag3=slides3.length-1;
//     }
//     for(let y of slides3){
//         y.style.display = "none";
//        }
//     slides3[num3].style.display = "block";
    
// }

var left=1;
var right=5;

function show(){

for(i=left;i<=right;i++){
   document.getElementById("c"+i).style.display="inline-block"
//    console.log(document.getElementById("c"+i).style.display="inline-block");
}
}
function moveLeft(){
if(left<=3 && right<=7){
    document.getElementById("c"+left).style.display="none";
    left+=1;
    right+=1;
    for(i=left;i<=right;i++){
        document.getElementById("c"+i).style.display="inline-block"
    }
}else return;
}

function moveRight(){
if(left>=2 && right>=6){
    document.getElementById("c"+right).style.display="none";
    left-=1;
    right-=1;
    for(i=left;i<=right;i++){
        document.getElementById("c"+i).style.display="inline-block"
    }
}else return;
}



