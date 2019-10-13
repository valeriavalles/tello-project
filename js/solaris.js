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
// ScrollReveal().reveal('#example', { duration: 500 });
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


    