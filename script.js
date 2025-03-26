
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click' , () => {
    navMenu.classList.remove('show-menu')
})



// /*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      nav=document.querySelector('.nav'),
      searchBtn= document.querySelector('#search-Icon')

searchBtn.addEventListener('click' , ()=> {
    nav.classList.toggle('openSearch');
    if(nav.classList.contains('openSearch')){
        return searchBtn.classList.replace("fa-magnifying-glass","fa-xmark")
    }
    return searchBtn.classList.replace("fa-xmark","fa-magnifying-glass")
})
    //   searchBtn = document.getElementById('search-btn'),
//       searchClose = document.getElementById('search-close')

// /* Search show */
// searchBtn.addEventListener('click', () =>{
//    search.classList.add('show-search')
// })

// /* Search hidden */
// searchClose.addEventListener('click', () =>{
//    search.classList.remove('show-search')
// })
