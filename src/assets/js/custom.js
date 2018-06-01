   $('.why_best_list').hover(function() {
        $(".checkSrc").each(function(e){
            $(this).attr("src",$(this).attr("normal-src"))
        })

        $(this).find("img").attr("src",$(this).find("img").attr("white-src"));
    });

    $('.why_best_list').mouseleave(function() {
        $(".checkSrc").each(function(e){
            $(this).attr("src",$(this).attr("normal-src"))
        })
    });

$(document).ready(function() {
  $('.clients-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    navText : ["<img src='images/left_arrow.png' class='img-responsive'>","<img src='images/right_arrow.png' class='img-responsive'>"],    
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true,
        loop: true,
        margin: 20
      }
    }
  })
})


var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
   $('.Count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
    a = 1;
  }

});

function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('fa-plus fa-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);



;( function( $ ) {

    $( '.swipebox' ).swipebox();

} )( jQuery );


var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
   $('.Count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
    a = 1;
  }

});