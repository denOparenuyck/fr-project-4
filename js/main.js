$('.hero__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.png" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.png" alt=""></button>',
});

$('.info__img-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.png" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.png" alt=""></button>',
});



$('.testimonials__slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.png" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.png" alt=""></button>',
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});




// Scroll to anchor
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  if ($.attr(this, 'href') === '#') {
    return false;
  }

  let offset = 100;

  if ($(window).width() < 992) {
    offset = 100;
  }

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - offset
  }, 500);
});

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 10) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});



const slide = document.querySelectorAll('.testimonials__slide');
for (let i = 0; i < slide.length; i++) {
  if (i % 2) {
    slide[i].classList.add('even');
  } else {
    slide[i].classList.add('odd');
  }
}

const mobileMenu = document.querySelector('.header__nav-mobile');
const btnMenu = document.querySelector('.header__btn');
const btnClose = document.querySelector('.header__btn-close');


btnMenu.addEventListener('click', () => {
  mobileMenu.classList.add('opened');
  document.body.style.overflowY = 'hidden';
})

btnClose.addEventListener('click', () => {
  mobileMenu.classList.remove('opened');
  document.body.style.overflowY = 'auto';
});





