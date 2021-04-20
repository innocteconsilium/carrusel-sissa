const swiper = new Swiper('.swiper-container', {
 
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 12500,
    disableOnInteraction: false,
  },
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"> </span>';
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// var lottieAnimation = bodymovin.loadAnimation({
//   container: LottieContainer, // ID del div
//   path: '../comp1/Comp 1.json', // Ruta fichero .json de la animación
//   renderer: 'svg', // Requerido
//   loop: true, // Opcional
//   autoplay: true, // Opcional
//   name: "Hello World", // Opcional
//   });

 
//       lottieAnimation.play();
      

//------------ IntersectionObserver -----------------
// const inViewport = (entries, observer) => {
//   entries.forEach(entry => {
//     entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
//   });
// };

// const Obs = new IntersectionObserver(inViewport);
// const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

// // Attach observer to every [data-inviewport] element:
// const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
// ELs_inViewport.forEach(EL => {
//   Obs.observe(EL, obsOptions);
// });