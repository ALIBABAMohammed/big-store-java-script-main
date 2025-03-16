import products from "./data.js";

const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});

const swiperElement = document.querySelector(".swiper");
const swiperWrapper = swiperElement.querySelector(".swiper-wrapper");
const swiperSlides = swiperElement.querySelectorAll(".swiper-slide");
swiperSlides.forEach((slide,_) => {
  const clonedSlide = slide.cloneNode(true);
  swiperWrapper.appendChild(clonedSlide);
});
const swiper = new Swiper(swiperElement, {
  autoplay: {
    delay: 5000,
  },
  slidesPerView: "auto",
  loop: false,
  centeredSlides: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },  
  effect: 'creative',
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['100%', 0, 0],
    },
  },
});

const filterProduct = document.querySelectorAll('.filter-select .fa-chevron-down');
const selectAvability = document.querySelector('.select-avability');
let visibility = true;

filterProduct.forEach( select => {

  select.addEventListener('click',function(e) {
    console.log(e.currentTarget.parentElement);
    const elementCollapse = e.currentTarget.parentElement.querySelector('div')
    hideSelected(elementCollapse);
    
  }); 
});

function hideSelected( selectedFilter) {
  if(visibility){
    selectedFilter.style.display = 'block';
    visibility = false;
  }
  else {
    console.log('toggled');
    selectedFilter.style.display = 'none' ;
    visibility = true;
  }
}


// display products 
