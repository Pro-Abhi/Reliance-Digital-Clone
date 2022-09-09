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


if(localStorage.getItem('location') != null){
  document.querySelector('#pin-code').innerHTML = localStorage.getItem('location')
}




