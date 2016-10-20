/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(function(){
     $(".name").typed({
       strings: ["Wentworth Computer Science Society <hr> "],
       typeSpeed: 50,
       startDelay: 2000,
       cursorChar: "_",
       callback: function(){
         $('.name').css('color','#d2202f')
         gotoSkills();
       },
     });
 });

 function gotoSkills(){
   $('.typed-cursor').hide();
   $('.skills').typed({
     strings: ["We Are "],
     typeSpeed: 50,
     startDelay: 3000,
     cursorChar: "_",
     callback: function(){
       skills();
     }
   });
 }

 function skills(){
   $('.typed-cursor').hide();
   $('#skills').typed({
     strings: ["Developers", "Programmers", "Hackers", "Enthusiasts", "Makers", "Visionaries", "Problem Solvers", "Legends"],
     typeSpeed: 50,
     backSpeed: 20,
     backDelay: 2000,
     cursorChar: "_",
     loop:true,
     preStringTyped: function() {
       $('#skills').css('color','#00ff00')
     },
     onStringTyped: function() {
       $('#skills').css('color','#ffab19')
     }
   });
 }


 $('header img').hide();
 $('header img').fadeIn(5000);
