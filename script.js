 // Top university
var multipleCardCarousel = document.querySelector("#carouselExampleControlss");

if (window.matchMedia("(min-width: 576px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  var carouselWidth = $(".carousel-innerPart")[0].scrollWidth;
  var cardWidth = $(".carousel-item-in").width();
  var scrollPosition = 0;
  $("#carouselExampleControlss .coro-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      scrollPosition += cardWidth;
      $("#carouselExampleControlss .carousel-innerPart").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControlss .coro-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControlss .carousel-innerPart").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide-edge");
}


var demoButtons;

function start () {
  demoButtons = document.querySelectorAll('.js-modify');
  for (var i = 0; i < demoButtons.length; i++) {
    demoButtons[i].addEventListener ('click', toggleEffect);
  }
  var saveButtons = document.querySelectorAll ('.js-save');
  for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener ('click', toggleActive);
  }
  
}

function toggleEffect () {
  var target = document.querySelector (this.dataset.target);
      target.dataset.effect = this.dataset.effect;
  
  for (var i= 0; i < demoButtons.length; i++) {
    demoButtons[i].classList.remove ('active');
  }
  
  toggleActive.call (this);
}

function toggleActive () {
  this.classList.toggle ('active');
}
window.addEventListener ('load', start);





// Accomplishment section

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // When window width is >= 992px (large screens)
        992: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        // When window width is >= 768px and < 992px (medium screens)
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        // When window width is < 768px (small screens)
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        }
      }
     
    
  });
  
  
  
 