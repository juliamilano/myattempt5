$(function() {

 	$("#my-menu").mmenu({
		extensions: ["effect-menu-slide", "pagedim-black"],
        navbar: {
            title: '<img src="img/logo-sedona1x.png" alt="Лого" height="40" width="50" style="margin-top: -10px;">'
        },
        offCanvas: {
            position: "right"
        }
	});

    var aPi = $('#my-menu').data('mmenu');
    aPi.bind("open:finish", function(){
        $(".hamburger").addClass("is-active");
    });
    aPi.bind('close:finish', function(){
        $(".hamburger").removeClass("is-active");
    });
	
    
    $(".carousel-services").on('initialized.owl-carousel', function(){
       setTimeout(function(){
        carouselService()
       }, 100);
    });

    $(".carousel-services").owlCarousel({
        loop: true,
        nav: true,
        margin: 0,
        dots: false,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left">', '<i class="fa fa-angle-double-right">'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    function carouselService(){
        $(".carousel-services-item").each(function(){
            var ths = $(this),
                thih = ths.find(".carousel-services-content").outerHeight();
                ths.find(".carousel-services-image").css("min-height", thih);
        });
    }carouselService();

   
    $(".carousel-services-item .h4").each(function(){
        var ths = $(this);
        ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
        });
    

// resize window
function onResize(){
    $('.carousel-services-content, .carousel-services-image').equalHeights();
}onResize();

window.onresize = function(){
    onResize()
};

    $('select').selectize({
            create: true
     });

$('.reviews').owlCarousel({
    loop: true,
    smartSpeed: 700,
    items: 1,
    nav: false,
    autoHeight: true
});
$('.partners').owlCarousel({
    loop: true,
    smartSpeed: 700,
    items: 4,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
    responsiveClass: true,
    responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: true
            },
            992: {
                items: 3
            },
             1200: {
                items: 4
            }
        }
});

   $(window).scroll(function(){
        if ($(this).scrollTop() > $(this).height()){
            $(".top").addClass("active");
        }else {
            $(".top").removeClass("active");
        }
    });

    $(".top").click(function(){
        $("html, body").stop().animate({scrollTop: 0}, "slow", "swing");
    });


function mapSettings(){
        if (window.navigator.userAgent.indexOf('Chrome/59.0.3071.86') !== -1) {
            $("div.mapGoogle").hide();
        }else if (window.navigator.userAgent.indexOf('Chrome/59.0.3071.115') !== -1) {
             $("div.mapYandex").hide(); 
        }else {
             $("div.mapGoogle").hide();
        }    
    }mapSettings();

});


$(window).on('load', function(){
    $(".preloader").delay(1000).fadeOut("slow");
});