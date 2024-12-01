// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY > 20){
//             $('.navbar').addClass("sticky");
//         }else{
//             $('.navbar').removeClass("sticky");
//         }
//         if(this.scrollY > 500){
//             $('.scroll-up-btn').addClass("show");
//         }else{
//             $('.scroll-up-btn').removeClass("show");
//         }
//     });
//      $('.scroll-up-btn').click(function(){
//          $('html').animate({scrollTop: 0});
//      });

//      var typed = new Typed(".typing", {
//          strings:["YouTuber", "Desenvolvedor", "Designer", "Freelancer"],
//          typeSpeed:100,
//          backSpeed:60,
//          loop:true
//      });
//      var typed = new Typed(".typing-2", {
//         strings:["YouTuber", "Desenvolvedor", "Designer", "Freelancer"],
//         typeSpeed:100,
//         backSpeed:60,
//         loop:true
//     });
//     $('.menu-btn').click(function(){
//         $('.navbar .menu').toggleClass("active");
//         $('.menu-btn i').toggleClass("active");
//     });
//     $('.carousel').owlCarousel({
//         margin:20,
//         loop:true,
//         autoplayTimeOut:2000,
//         autoplayHoverPauser:true,
//         responsive:{
//             0:{
//                 items:1,
//                 nav:false
//             },
//             600:{
//                 items:2,
//                 nav:false
//             },
//             1000:{
//                 items:3,
//                 nav:false
//             }
//         }
//     });
// });




$(document).ready(function () {
    // Sticky Navbar
    $(window).scroll(function () {
        $('.navbar').toggleClass("sticky", this.scrollY > 20);
        $('.scroll-up-btn').toggleClass("show", this.scrollY > 500);
    });

    // Scroll-up Button
    $('.scroll-up-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow'); // Smooth scroll to top
    });

    // Typing Animations
    const typingOptions = {
        strings: ["Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };
    new Typed(".typing", typingOptions);
    new Typed(".typing-2", typingOptions); // Reusing the same options for both elements

    // Menu Toggle
    $('.menu-btn').click(function () {
        $('.navbar .menu, .menu-btn i').toggleClass("active");
    });

    // Carousel (Owl Carousel Plugin)
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });
});