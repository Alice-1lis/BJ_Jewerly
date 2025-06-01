const menuBtn = document.querySelector('.menu__btn')
const menuMobile = document.querySelector('.header__menu-list')

menuBtn.addEventListener('click', ()=> {
menuMobile.classList.toggle('menu--open')
});  
   


const swiperOne = new Swiper('.feedback__slider', {
    // Optional parameters
   // direction: 'vertical',
   loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      clickable: true,
    },
  });



  const swiperTwo = new Swiper('.certificates__slider', {
    loop: true,
    slidesPerView: 3,
    spaceBeetween: 20,
  
   
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      responsive: {
        480: {
          slidesPerView: 2,
        },
      },
    },
  });



  const accordeon = document.querySelector('.accordeon');
  const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');

  accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
    accordeonTitle.addEventListener('click', function() {

      const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');

      accordeonTitle.classList.toggle('accordeon__title--active');
      currentText.classList.toggle('accordeon__text--visible');


      if (currentText.classList.contains('accordeon__text--visible')){
        currentText.style.maxHeight = currentText.scrollHeight + 'px'
      } else{
        currentText.style.maxHeight = null
      }

    });
  
  });