
let slider = [...document.querySelectorAll('.slider')]
let nxtBtn = [...document.querySelectorAll('.next-btn')]
let preBtn = [...document.querySelectorAll('.prev-btn')]

slider.forEach((item, i) => {
  console.log(item);
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  console.log(containerDimensions, containerWidth);

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
    console.log('hii');
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
    console.log('hello');
  });
});






let toggleBtn = document.querySelector('.toggle-btn')
let x = document.querySelector('.show-hide');
let y = document.querySelector('.on-off')

function onOff(){
  if(x.style.display == 'block'){
    x.style.display = 'none'
    toggleBtn.innerHTML = 'View more'
  }
  else{
    x.style.display = 'block'
    toggleBtn.innerHTML = 'View less'
  }
}

function toggle(){
  if(y.style.display == 'block'){
    y.style.display = 'none'
    document.querySelector('.btn-txt').innerHTML = 'See more >>'
  }
  else{
    y.style.display = 'block'
    document.querySelector('.btn-txt').innerHTML = 'See less >>'
  }
}

// function location(){
//   if(localStorage.getItem('location') != null){
//     document.querySelector('#pin-code').value = localStorage.getItem('location')
//   }
// }
// window.onload = location()




