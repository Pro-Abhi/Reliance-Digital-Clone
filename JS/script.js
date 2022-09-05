// sticky header
let header = document.querySelector('.header-linkinfo')
let sticky_header = document.querySelector('.header')

let observer = new IntersectionObserver((entries) => {
  let ent = entries[0]
  console.log(ent);
  ent.isIntersecting === false ? sticky_header.classList.add('sticky') : sticky_header.classList.remove('sticky')
}, {
  root: null,
  rootMargin: "",
  threshold: 0,
})

observer.observe(header)


// pin-code
let userPinCode = document.querySelector(".user-pin-code");
let popUp = document.querySelector(".pop-up");
let inputScreen = document.querySelector("#pinCode");
let closeBtn = document.querySelector(".close");
let submitBtn = document.querySelector(".apply");
let foundMsg = document.querySelector(".found-msg");
let errorMsg = document.querySelector(".error-msg");
let inputLabel = document.querySelector('.txt-input label')

userPinCode.addEventListener("click", () => {
  popUp.classList.remove("inactive");
  inputScreen.value = "";
  errorMsg.innerHTML = "";
  inputScreen.classList.remove("red-border");
});

closeBtn.addEventListener("click", () => {
  popUp.classList.add("inactive");
});

submitBtn.addEventListener("click", () => {
  if(inputScreen.value.length < 6) {
    popUp.classList.remove("inactive");
    errorMsg.innerHTML = `Please enter correct PIN Code`;
    inputScreen.classList.add("red-border");
  }
  else{
    fetch(`https://api.postalpincode.in/pincode/${inputScreen.value}`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((ele) => {
          // console.log(ele);
          let status = ele.Status;
          let PostOffice = ele.PostOffice;
          if (status == "Success") {
            PostOffice.forEach((e) => {
              // console.log(e);
              foundMsg.innerText = `${e.District} ${e.Pincode}`;
            });
            popUp.classList.add('inactive')
          } 
          else if(status == "Error") {
            popUp.classList.remove("inactive");
            errorMsg.innerText = `Invalid Pincode`;
            inputScreen.classList.add("red-border");
          }
        });
      });
  }
});

inputScreen.addEventListener("focus", () => {
  inputScreen.value = "";
  errorMsg.innerHTML = "";
  inputScreen.classList.remove("red-border");
});