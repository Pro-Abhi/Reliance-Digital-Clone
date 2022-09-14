const texts = document.querySelector(".question-text");
const buttons = document.querySelector(".question-btn");


buttons.addEventListener("click",function(){
    // console.log(texts.classList.toggle("question-text"));
    texts.classList.toggle("question-text")
})

// Dekivery Method Tab

const dmabout = document.querySelector(".dmAbout");
const dmbtns = document.querySelectorAll(".dmTabBtn");
const dmarticles = document.querySelectorAll(".dmContent");

 dmabout.addEventListener("click",function(e){
    //   console.log(e.target.dataset.id)
    const id = e.target.dataset.id;
    if (id){
        // remove active from other buttons
        dmbtns.forEach(function(btn){
            btn.classList.remove("dmActive");
            e.target.classList.add("dmActive");
        });
        // hide other articles
        dmarticles.forEach(function(article){
          article.classList.remove("dmActive");
        });
        const element = document.getElementById(id);
        element.classList.add("dmActive");
    }
 });

// console.log()

const addnewshippingadd = document.querySelector(".Button__Style__add");
addnewshippingadd.addEventListener("click",function(){
    // console.log(texts.classList.toggle("question-text"));
    // texts.classList.toggle("question-text")
})