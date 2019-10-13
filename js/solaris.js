$('#menu').on('click', function(){
  $('.nav-menu').addClass('nav-show')
})
$('.delete').on('click', function(){
  $('.nav-menu').removeClass('nav-show')
})

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
  ScrollReveal().reveal('.tile', {
    interval: 200,
    reset: true
  });

    