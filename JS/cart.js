// for pin-code search
let userPinCode = document.querySelector(".user-pin-code");
let popUp = document.querySelector(".pop-up");
let inputScreen = document.querySelector("#pinCode");
let closeBtn = document.querySelector(".close");
let submitBtn = document.querySelector(".apply");
let foundMsg = document.querySelector(".found-msg");
let errorMsg = document.querySelector(".error-msg");
let inputLabel = document.querySelector(".txt-input label");

userPinCode.addEventListener("click", () => {
  popUp.classList.remove("inactive");
  inputScreen.value = "";
  errorMsg.innerHTML = "";
  inputScreen.classList.remove("alert");
  inputLabel.classList.remove("alert");
});

closeBtn.addEventListener("click", () => {
  popUp.classList.add("inactive");
});

submitBtn.addEventListener("click", () => {
  if (inputScreen.value.length < 6) {
    popUp.classList.remove("inactive");
    errorMsg.innerHTML = `Please enter correct PIN Code`;
    inputScreen.classList.add("alert");
    inputLabel.classList.add("alert");
  } else {
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
              let PinCode = `${e.District} ${e.Pincode}`;
              foundMsg.innerText = PinCode;

              localStorage.setItem("location", PinCode);
            });
            popUp.classList.add("inactive");
          } else if (status == "Error") {
            popUp.classList.remove("inactive");
            errorMsg.innerText = `Invalid Pincode`;
            inputScreen.classList.add("alert");
            inputLabel.classList.add("alert");
          }
        });
      });
    errorMsg.innerHTML = `<div class="loader"></div>`;
  }
});

inputScreen.addEventListener("focus", () => {
  errorMsg.innerHTML = "";
  inputScreen.classList.remove("alert");
  inputLabel.classList.remove("alert");
});

// get user location after page reload if its present in localstorage
function getLocation() {
  if (localStorage.getItem("location") != null) {
    foundMsg.innerHTML = localStorage.getItem("location");
  }
}
window.onload = getLocation();