$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });
    
    var typed = new Typed(".typed", {
        strings: ['Make', 'Your', 'Life', 'Easier'],
        typeSpeed: 90,
        loop: true,
        startDelay: 0,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        item: 5,

        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });



    var skillsTopOffset = $(".skillSection").offset().top;
    
    $(window).scroll(function() {
        
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 3,
                size: 150,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });
});
