const closeButton = document.querySelector(".cross");
const mainContainer = document.querySelector(".upadcontainer");
const cancelButton =document.querySelector(".upadCancel")

closeButton.addEventListener("click",function (){
    mainContainer.classList.add("open-cross")
    // console.log()
});

cancelButton.addEventListener("click",function (){
    mainContainer.classList.add("open-cross")
    // console.log()
});