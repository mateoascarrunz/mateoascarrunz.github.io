const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: 'cards',
    grabCursor: true,
    cardsEffect:{
      slideShadows:false,
      perSlideRotate: 1,
      perSlideOffset: 6,
    },

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });