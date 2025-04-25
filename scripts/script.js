const showMoreBtn = document.querySelector('.button_show-more');
const cardListContainer = document.querySelector('.card__list');
showMoreBtn.addEventListener('click', () => {
    cardListContainer.classList.toggle('card__list--show');
    showMoreBtn.classList.toggle('button_hide-more');
    const hideMoreBth = document.querySelector('.button_hide-more')
    if (hideMoreBth){
    hideMoreBth.textContent = 'Скрыть';
    } else {
    showMoreBtn.textContent = 'Показать всё';
    }
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
