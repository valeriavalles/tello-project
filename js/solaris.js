$('#menu').on('click', function(){
  $('.nav-menu').addClass('nav-show')
})
$('.delete').on('click', function(){
  $('.nav-menu').removeClass('nav-show')
})

ScrollReveal().reveal('.tile', {
  interval: 1000,
  reset: true
});

function counter(){
  $('.counter').each(function () {
    $(this).prop('Counter',0).animate(
      {
          Counter: $(this).text()
      }, 
      {
          duration: 2500,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
}

counter()

$.fn.animateCounter = function(options) {
  var settings = $.extend({
      start:  0,
      end:    100,
      easing: 'swing',
      duration: 400,
      complete: ''
  }, options );

  var thisElement = $(this);

  $({count: settings.start}).animate({count: settings.end}, {
      duration: settings.duration,
      easing: settings.easing,
      step: function() {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete
    });
  };
  var seEjecuto = 0;
$(window).scroll(function() {
   if($(this).scrollTop() >= 650 && seEjecuto === 0  ){
// if ($(this).scrollTop() >= $("#projectFacts").position().top && seEjecuto === 0) {
    seEjecuto = 1;
    $('.number-1').animateCounter({start: 1,end: 150,duration: 5000});
    $('.number-2').animateCounter({start: 1,end: 29,duration: 5000});
    $('.number-3').animateCounter({start: 1,end: 34,duration: 5000});
    $('.number-4').animateCounter({start: 10,end: 960,duration: 5000});
    $('.number-5').animateCounter({start: 10,end: 36,duration: 5000});
  }
});

  


// console.log($("#zona-3").offset().top)
 



    