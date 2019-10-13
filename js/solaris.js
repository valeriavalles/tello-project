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

  // $(window).scroll(function () {
  //   if ($(window).scrollTop() < 1000)  {
  //     console.log('1 cualquier cosa')
  //     // $('.counter2').each(function () {
  //     //   $(this).prop('Counter',0).animate(
  //     //     {
  //     //         Counter: $(this).text()
  //     //     }, 
  //     //     {
  //     //         duration: 2500,
  //     //         easing: 'swing',
  //     //         step: function (now) {
  //     //             $(this).text(Math.ceil(now));
  //     //         }
  //     //     });
  //     //   });
  //     }
  //   else if ($(window).scrollTop() >= 300) {
  //     // $('#content-nav').addClass('navbar-show');
  //     console.log('2 cualquier cosa')
  //     $('.counter2').each(function () {
  //       $(this).prop('Counter',0).animate(
  //         {
  //             Counter: $(this).text()
  //         }, 
  //         {
  //             duration: 15,
  //             easing: 'swing',
  //             step: function (now) {
  //                 $(this).text(Math.ceil(now));
  //             }
  //         });
  //       });
  //   } 
  // });

//   $('.arrow-img').click(function() {
//     console.log('hdsg')
//     $('html, body').animate({
//         scrollTop: $(".section2").offset().top - 0
//     }, 1000);
// })
console.log($("#zona-3").offset().top)
 

//   $(document).on("scroll", function(){
//     var desplazamientoActual = $(document).scrollTop();
//     var controlArriba = $("#irarriba");
//     console.log("Estoy en " , desplazamientoActual); 
//     if(desplazamientoActual > 100 && controlArriba.css("display") == "none"){
//         // controlArriba.fadeIn(500);
//         console.log('hi1')
//     }
//     if(desplazamientoActual < 100 && controlArriba.css("display") == "block"){
//         // controlArriba.fadeOut(500);
//         console.log('hh2')
//     }
// });


    