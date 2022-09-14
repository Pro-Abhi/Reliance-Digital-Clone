const m53__slides = document.querySelectorAll(".m53__slide");
const nextBtn =document.querySelector(".m53__next");
const prevtBtn =document.querySelector(".m53__prev");

m53__slides.forEach(function(slide,index){
    // console.log(index);
   
    slide.style.left =`${index * 100}%`;
});
let counter = 0;


nextBtn.addEventListener("click",function(){
 counter++;
 carousel();

});
prevtBtn.addEventListener("click",function(){
    counter--;
    carousel();
  
   });
setInterval(carousel,1000);

carousel();
   function carousel(){
    // working with m53__slides
    
    if(counter === m53__slides.length){
        counter = 0;
    }
    if(counter < 0){
        counter = m53__slides.length - 1;
    }
    m53__slides.forEach(function(slide){
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
    
}

//  above my codes  

// let counter=0;
// let myIndex = 1;
// carousel2();
// function carousel2() {
    // const x = document.getElementsByClassName("m53__slide");
//     for (let i = 0; i < m53__slides.length; i++) {
//         m53__slides[i].style.display = "none";
//     }
   
//     if (myIndex > m53__slides.length) {
//       myIndex = 1;
//     }
//     m53__slides[myIndex - 1].style.display = "block";
//     myIndex++;
//     setTimeout(carousel2, 1000);

 
//   }

//   ************
  
//   nextBtn.addEventListener("click",function(){
//     counter++;
   
//    });
//    prevtBtn.addEventListener("click",function(){
//        counter--;
      
//       });

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs((slideIndex += n));
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlide");
//   if (n > x.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex - 1].style.display = "block";
// }


// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs((slideIndex += n));
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlide");
//   if (n > x.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex - 1].style.display = "block";
// }
// let myIndex = 0;
// carousel();

// function carousel() {
//   const x = document.getElementsByClassName("mySlides");
//   for (let i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) {
//     myIndex = 1;
//   }
//   x[myIndex - 1].style.display = "block";

//   setTimeout(carousel, 10000);
// }
// smartphones 1st slider API&js
fetch('https://api.escuelajs.co/api/v1/categories/3/products').then((data)=>{
    // console.log(data);
    return data.json();
}).then((completedata)=>{
    // console.log(completedata);
    let resultS1 = "";
    completedata.map((values)=>{
        resultS1 = `<div class="thumbnail" >
        <img src="${values.images[1]
        }" alt="">
          <div class="product-details">
            <div class="mss__slider__title">${values.title}</div>
            <div>${values.description}</div>
            <div>${values.price}</div>
            <div>${values.category}</div>
            <div class="span__a">OFFERS AVAILABLE</div>
            
          </div>
        </div>`
        console.log(values)
        document.querySelector(".SmartPhContainer").innerHTML+= resultS1;



    });
   
}).catch((error)=>{
    console.log("Some Error")
})




let A = document.getElementById("smartPhSlider");

let B = A.getElementsByClassName("thumbnail");
// console.log(A,B)



function next(){
    A.append(B[0])
    console.log('pass');
}
function prev(){
    A.prepend(B[B.length-1])
    console.log('prepend pass');
}
// 



    


