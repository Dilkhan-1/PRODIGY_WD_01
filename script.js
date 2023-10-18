$(document).ready(function() {
    // Smooth scrolling for all anchor links
    $('a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Smooth scrolling for the "Up Arrow" link to the "home" section
    $('.up-arrow-link').on('click', function(event) {
        event.preventDefault();
        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
            var yOffset = targetElement.getBoundingClientRect().top + window.scrollY;
            $('html, body').animate({
                scrollTop: yOffset
            }, 800);
        }
    });
});
