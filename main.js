
$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '20px',
            dots: true,
        },
      },
    ],
  })         

let mainListDiv = document.getElementById("navList");
let mediaButton = document.getElementById("menu-toggle");
let body = document.querySelector('body');

mediaButton.onclick = function () {
  "use strict";
    
  mainListDiv.classList.toggle("show_list");
  mediaButton.classList.toggle("active");
  // body.style.backgroundImage = 'linear-gradient(to bottom, ' + '#fff' + ', ' + '#000' + ')'
  // body.style.transition = ' 0.4s'
    
};
