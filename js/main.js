//AOS.init({
//     offset:1
//});

document.addEventListener('DOMContentLoaded', function () {
    let nav = document.querySelector('nav');
    let menuBtn = document.querySelector('.menu');
    menuBtn.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});