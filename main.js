var swiper = new Swiper(".homepage", {
    
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
let menu = document.querySelector("#menu-icon");
let home = document.querySelector(".home-active");
let nav = document.querySelector(".menulist");
let wrong = document.querySelector("#wrong-icon");
menu.onclick = function(){
     home.classList.remove('home-active');
     nav.classList.remove('menulist');
     nav.classList.add('menulist-respo');  
     wrong.style.display = 'block';
}
wrong.onclick = function(){
  nav.classList.remove('menulist-respo');
  nav.classList.add('menulist');
  wrong.style.display = 'none';  
  home.classList.add('home-active');
}



