function navSlider() {
    let burger = document.getElementById('.menu-toggle');
    let nav = document.getElementById('.nav-header');
    let bdy = document.querySelector('body');

    if ( nav.className === 'nav-links') {
        nav.className += 'responsive';
        burger.className += 'responsive';
        console.log(typeof(nav))

        bdy.style.backgroundImage = 'linear-gradient(to bottom, ' + '#fff' + ', ' + '#000' + ')'
        bdy.style.transition = '0.4s'
    } 

    // burger.addEventListener('click', () => {
    //     nav.classList.slideToggle(200);
    // });
}

// navSlider();

// const navSlider = () => {
    
// }

// navSlider();

// const respNav = document.querySelector('.resp-nav-bar');
// const navToggle = document.querySelector('.mobile-nav-toggle');
// const primaryNav = document.querySelector('.nav-links');

// navToggle.addEventListener('click', () => {
//     const visibility = primaryNav.getAttribute('data-visible');
//     // console.log(typeof(visibility));
//     if (visibility === "false") {
//         primaryNav.setAttribute("data-visible", true);
//         console.log(visibility);
//     }
// });