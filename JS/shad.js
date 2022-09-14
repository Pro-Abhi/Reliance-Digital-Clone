const dmabout = document.querySelector(".select-del-method");
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