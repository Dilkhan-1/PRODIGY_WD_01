window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav');
    if (window.scrollY > 100) { 
        nav.style.backgroundColor = '#ff9900'; 
    } else {
        nav.style.backgroundColor = '#333'; 
    }
});
