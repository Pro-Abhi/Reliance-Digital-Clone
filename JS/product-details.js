let toggleBtn = document.querySelector('.toggle-btn')
let x = document.querySelector('.show-hide');
let y = document.querySelector('.on-off')
console.log(x,y);

function onOff(){
  if(x.style.display == 'block'){
    x.style.display = 'none'
  }
  else{
    x.style.display = 'block'
  }
}

function toggle(){
  if(y.style.display == 'block'){
    y.style.display = 'none'
  }
  else{
    y.style.display = 'block'
  }
}
