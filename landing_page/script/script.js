var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let preloading=document.querySelector(".chickenload");
  function chicken(){
   preloading.style.display="none";
  }
  let deal = ()=>{
    setTimeout(() => {
      chicken();
    
    },3000);
  }
  window.onload=deal();
