// google map api
// AIzaSyC1iXLGTnRXag1eDHHe5TAwBgC5oNXwLHA


let userInput = document.querySelector('#user-input')
let searchBtn = document.querySelector('#searchBtn')
let stores = document.querySelector('.our-stores')

searchBtn.addEventListener('click', () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6d01661117msh43378e4b13b7865p1a6231jsn0efb3024fdbb',
      'X-RapidAPI-Host': 'walmart.p.rapidapi.com'
    }
  };
  
  fetch(`https://walmart.p.rapidapi.com/stores/list?postalCode=${userInput.value}`, options)
    .then(response => response.json())
    .then(data => {
      let get_stores = data.data.storesBySearchTerm.stores
      // console.log(get_stores);
      get_stores.map(ele => {
        let latitude = ele.geoPoint.latitude
        let longitude = ele.geoPoint.longitude
      })
    })
    .catch(err => console.error(err));
})