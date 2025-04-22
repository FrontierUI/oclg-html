// Navbar

var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);

// sliders

$(function () {
  $('.mortSlider').slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 12000,
    swipe: false,
    slidesToShow: 3,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    ltr: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
    ],
  });
});

$(document).ready(function () {
  $('.testimonialSlider').slick({
    centerMode: true,
    centerPadding: '30px',
    dots: false,
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  });
});

//
// Accourdion

// const items = document.querySelectorAll('.accordion button');

// function toggleAccordion() {
//   const itemToggle = this.getAttribute('aria-expanded');

//   for (i = 0; i < items.length; i++) {
//     items[i].setAttribute('aria-expanded', 'false');
//   }

//   if (itemToggle == 'false') {
//     this.setAttribute('aria-expanded', 'true');
//   }
// }
// items.forEach((item) => item.addEventListener('click', toggleAccordion));
