// sticky header
let body = document.querySelector('BODY')
let header = document.querySelector('.header-linkinfo')
let sticky_header = document.querySelector('.header')

let observer = new IntersectionObserver((entries) => {
  let ent = entries[0]
  // console.log(ent);
  ent.isIntersecting === false ? body.classList.add('sticky') : body.classList.remove('sticky')
}, {
  root: null,
  rootMargin: "",
  threshold: 0,
})

observer.observe(header)

