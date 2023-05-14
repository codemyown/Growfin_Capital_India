jQuery(document).ready(function($) {
    'use strict';

    /* menu js **/

    if ($(".dropdown-menu a.dropdown-toggle").length) {

        $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');

            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
                $('.dropdown-submenu .show').removeClass("show");
            });

            return false;
        });

    }

    /* counter **/

    if ($(".counter").length) {

        $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 5000,
                    easing: 'linear',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });


        });

    }

    /*--- accordion js (plus-minus) ----*/

    if ($('.collapse').length) {


        $('.collapse').on('shown.bs.collapse', function() {
            $(this).parent().find(".fa-plus-circle").removeClass("fa-plus-circle").addClass("fa-minus-circle");
        }).on('hidden.bs.collapse', function() {
            $(this).parent().find(".fa-minus-circle").removeClass("fa-minus-circle").addClass("fa-plus-circle");
        });

        $('.card-header a').click(function() {
            $('.card-header').removeClass('active');

            //If the panel was open and would be closed by this click, do not active it
            if (!$(this).closest('.card').find('.collapse').hasClass('in'))
                $(this).parents('.card-header').addClass('active');
        });



    }

    /* accordion (circle arrow) **/


    if ($('.collapse').length) {

        $('.collapse').on('shown.bs.collapse', function() {
            $(this).parent().find(".fa-chevron-circle-down").removeClass("fa-chevron-circle-down").addClass("fa-chevron-circle-up");
        }).on('hidden.bs.collapse', function() {
            $(this).parent().find(".fa-chevron-circle-up").removeClass("fa-chevron-circle-up").addClass("fa-chevron-circle-down");
        });

        $('.card-header a').click(function() {
            $('.card-header').removeClass('active');

            //If the panel was open and would be closed by this click, do not active it
            if (!$(this).closest('.card').find('.collapse').hasClass('in'))
                $(this).parents('.card-header').addClass('active');
        });



    }

    /* accordion js (arrow) **/


    if ($('.collapse').length) {


        $('.collapse').on('shown.bs.collapse', function() {
            $(this).parent().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
        }).on('hidden.bs.collapse', function() {
            $(this).parent().find(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
        });

        $('.card-header a').click(function() {
            $('.card-header').removeClass('active');

            //If the panel was open and would be closed by this click, do not active it
            if (!$(this).closest('.card').find('.collapse').hasClass('in'))
                $(this).parents('.card-header').addClass('active');
        });

    }


    /* accordion js (plus-minus-outline) **/


    if ($('.collapse').length) {


        $('.collapse').on('shown.bs.collapse', function() {
            $(this).parent().find(".ion-ios7-plus-outline").removeClass("ion-ios7-plus-outline").addClass("ion-ios7-minus-outline");
        }).on('hidden.bs.collapse', function() {
            $(this).parent().find(".ion-ios7-minus-outline").removeClass("ion-ios7-minus-outline").addClass("ion-ios7-plus-outline");
        });

        $('.card-header a').click(function() {
            $('.card-header').removeClass('active');

            //If the panel was open and would be closed by this click, do not active it
            if (!$(this).closest('.card').find('.collapse').hasClass('in'))
                $(this).parents('.card-header').addClass('active');
        });

    }


    /* tooltip **/

    if ($('[data-toggle="tooltip"]').length) {

        $('[data-toggle="tooltip"]').tooltip()

    }

    /* Popover  **/
    if ($('[data-toggle="popover"]').length) {


        $('[data-toggle="popover"]').popover({
            trigger: 'focus'
        })



    }


    /* calculator  **/

    if ($('.calculator-amortization').length) {

        $(".calculator-amortization").accrue({
            mode: "amortization"
        });





    }


    /* calculator-loan  **/

    if ($('.calculator-loan').length) {

        $(".calculator-loan").accrue();

    }




    /* event card  **/

    if ($('.event-card').length) {

        $('.event-card')
            // Remove links that don't actually link to anything

            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top - 90
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                };
                $('.event-card').each(function() {
                    $(this).removeClass('active');
                })
                $(this).addClass('active');


            });

    }





    /* datatable  **/

    if ($('#example').length) {

        $(document).ready(function() {
            $('#example').DataTable();
        });

    }


    /* header boxed **/

    if ($('.header-boxed').length) {

        $(window).scroll(function() {
            if ($(".header-boxed").offset().top > 200) {
                $(".header-boxed").addClass("header-boxed-collapse");
            } else {
                $(".header-boxed").removeClass("header-boxed-collapse");
            }
        });

    }



    /* Preview Carousel **/

    if ($('.preview-carousel').length) {

        $('.preview-carousel').slick({
            arrows: true,

            slidesToShow: 6,
            autoplay: true,
            autoplaySpeed: 1500,
            dots: true,
            arrows: false,

            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true
                    }
                },

                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

    }


    /* events second **/

    if ($('.section-heading a').length) {

        $('.section-heading a')
            // Remove links that don't actually link to anything

            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top - 0
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                };
                $('.section-heading a').each(function() {
                    $(this).removeClass('active');
                })
                $(this).addClass('active');



            });


    }

    /* video play btn **/

    if ($('.video-container a').length) {

        var playButton = document.querySelector('.video-container a');
        playButton.addEventListener('click', playVideo);

        function playVideo(e) {
            e.preventDefault();
            var videoContainer = this.parentNode;
            var videoUrl = this.href;
            var videoId = videoUrl.split('.com/')[1];
            var iframeUrl = void 0;

            if (videoUrl.includes('vimeo')) {
                // vimeo
                videoId = videoId.split('?')[0];
                iframeUrl = '//player.vimeo.com/video/' + videoId + '?autoplay=1';
            } else {
                // youtube
                videoId = videoId.split('v=')[1];
                iframeUrl = '//www.youtube.com/embed/' + videoId + '?autoplay=1';
            }

            videoContainer.innerHTML = '<iframe src="' + iframeUrl + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
        }

    }

    /* slider nav **/


    if ($('.slider-for, .slider-nav').length) {

        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
            autoplay: true
        });

        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            useTransform: false


        });

    }


    if ($('.slider-gallery, .slider-gallery-nav').length) {

        $('.slider-gallery').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.slider-gallery-nav',
            autoplay: true
        });

        $('.slider-gallery-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            asNavFor: '.slider-gallery',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            useTransform: false


        });

    }


    /* loan features **/


    if ($('.loan-features-tab ul li a').length) {

        $('.loan-features-tab ul li a')
            // Remove links that don't actually link to anything

            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top - 10
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                };
                $('.loan-features-tab ul li a').each(function() {
                    $(this).removeClass('active');
                })
                $(this).addClass('active');



            });


    }




    /* loan features **/


    if ($('.sidebar-nav-fixed a').length) {

        $('.sidebar-nav-fixed a')
            // Remove links that don't actually link to anything

            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top - 90
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                };
                $('.sidebar-nav-fixed a').each(function() {
                    $(this).removeClass('active');
                })
                $(this).addClass('active');



            });


    }





    if ($('.header-transparent').length) {

        $(window).scroll(function() {
            if ($(".header-transparent").offset().top > 200) {
                $(".header-transparent").addClass("header-collapse");
            } else {
                $(".header-transparent").removeClass("header-collapse");
            }
        });







    }


 

    /* Preview Carousel **/

    if ($('.preview-carousel-second').length) {

        $('.preview-carousel-second').slick({
            arrows: true,

            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 1500,
            dots: true,
            arrows: false,

            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true
                    }
                },

                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

    }







}); // AND OF JQUERY



$('.people-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
   arrows: false,
   responsive: [
    {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
          


//   $(document).ready(function(){
//     $(".see").click(function(){
//       $(".jobs").toggle();
//     });
//   });




  $('#ourteam').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  
  $('#bank-logo').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });


  var i = 0;
function myFunction(i) {
    var x = document.getElementsByClassName('jobs');
    if (x[i].style.display === 'block') {
      x[i].style.display = 'none';
    } else {
      x[i].style.display = 'block';
    }
  }






  var cc1 = document.getElementById("hdfc11");
  var cc2 = document.getElementById("axis11");
  var cc3 = document.getElementById("au11");
  var cc4 = document.getElementById("sbi11");
  var cc5 = document.getElementById("idfc11");
  var cc6 = document.getElementById("stand11");
  var cc7 = document.getElementById("hsbc11");
  var cc8 = document.getElementById("american11");
  var cc9 = document.getElementById("yes11");
  
  
  
  
  function bank1() {
  
      cc1.style.display = "block";
      cc2.style.display = "none";
      cc3.style.display = "none";
      cc4.style.display = "none";
      cc5.style.display = "none";
      cc6.style.display = "none";
      cc7.style.display = "none";
      cc8.style.display = "none";
      cc9.style.display = "none";
  
  
  }
  
  
  function bank2() {
  
      cc1.style.display = "none";
      cc2.style.display = "block";
      cc3.style.display = "none";
      cc4.style.display = "none";
      cc5.style.display = "none";
      cc6.style.display = "none";
      cc7.style.display = "none";
      cc8.style.display = "none";
      cc9.style.display = "none";
  
  }
  
  function bank3() {
  
      cc1.style.display = "none";
      cc2.style.display = "none";
      cc3.style.display = "block";
      cc4.style.display = "none";
      cc5.style.display = "none";
      cc6.style.display = "none";
      cc7.style.display = "none";
      cc8.style.display = "none";
      cc9.style.display = "none";
  
  }
  function bank4() {
  
  cc1.style.display = "none";
  cc2.style.display = "none";
  cc3.style.display = "none";
  cc4.style.display = "block";
  cc5.style.display = "none";
  cc6.style.display = "none";
  cc7.style.display = "none";
  cc8.style.display = "none";
  cc9.style.display = "none";
  
  }
  function bank5() {
  
  cc1.style.display = "none";
  cc2.style.display = "none";
  cc3.style.display = "none";
  cc4.style.display = "none";
  cc5.style.display = "block";
  cc6.style.display = "none";
  cc7.style.display = "none";
  cc8.style.display = "none";
  cc9.style.display = "none";
  
  }
  function bank6() {
  
  cc1.style.display = "none";
  cc2.style.display = "none";
  cc3.style.display = "none";
  cc4.style.display = "none";
  cc5.style.display = "none";
  cc6.style.display = "block";
  cc7.style.display = "none";
  cc8.style.display = "none";
  cc9.style.display = "none";
  
  }
  function bank7() {
  
  cc1.style.display = "none";
  cc2.style.display = "none";
  cc3.style.display = "none";
  cc4.style.display = "none";
  cc5.style.display = "none";
  cc6.style.display = "none";
  cc7.style.display = "block";
  cc8.style.display = "none";
  cc9.style.display = "none";
  
  }
  function bank8() {
  
  cc1.style.display = "none";
  cc2.style.display = "none";
  cc3.style.display = "none";
  cc4.style.display = "none";
  cc5.style.display = "none";
  cc6.style.display = "none";
  cc7.style.display = "none";
  cc8.style.display = "block";
  cc9.style.display = "none";
  
  }
  function bank9() {
  
  cc1.style.display = "none";
  cc2.style.display = "none";
  cc3.style.display = "none";
  cc4.style.display = "none";
  cc5.style.display = "none";
  cc6.style.display = "none";
  cc7.style.display = "none";
  cc8.style.display = "none";
  cc9.style.display = "block";
  
  }  





  
function card1() {
    var zz1 = document.getElementById("credit1").innerHTML;
    document.getElementById("credit").value = zz1;
}

function card2() {
    var zz2 = document.getElementById("credit2").innerHTML;
    document.getElementById("credit").value = zz2;
}

function card3() {
    var zz3 = document.getElementById("credit3").innerHTML;
    document.getElementById("credit").value = zz3;
}

function card4() {
    var zz4 = document.getElementById("credit4").innerHTML;
    document.getElementById("credit").value = zz4;
}

function card5() {
    var zz5 = document.getElementById("credit5").innerHTML;
    document.getElementById("credit").value = zz5;
}

function card6() {
    var zz6 = document.getElementById("credit6").innerHTML;
    document.getElementById("credit").value = zz6;
}

function card7() {
    var zz7 = document.getElementById("credit7").innerHTML;
    document.getElementById("credit").value = zz7;
}

function card8() {
    var zz8 = document.getElementById("credit8").innerHTML;
    document.getElementById("credit").value = zz8;
}

function card9() {
    var zz9 = document.getElementById("credit9").innerHTML;
    document.getElementById("credit").value = zz9;
}

function card10() {
    var zz10 = document.getElementById("credit10").innerHTML;
    document.getElementById("credit").value = zz10;
}


function card11() {
    var zz11 = document.getElementById("credit11").innerHTML;
    document.getElementById("credit").value = zz11;
}

function card12() {
    var zz12 = document.getElementById("credit12").innerHTML;
    document.getElementById("credit").value = zz12;
}

function card13() {
    var zz13 = document.getElementById("credit13").innerHTML;
    document.getElementById("credit").value = zz13;
}

function card14() {
    var zz14 = document.getElementById("credit14").innerHTML;
    document.getElementById("credit").value = zz14;
}

function card15() {
    var zz15 = document.getElementById("credit15").innerHTML;
    document.getElementById("credit").value = zz15;
}

function card16() {
    var zz16 = document.getElementById("credit16").innerHTML;
    document.getElementById("credit").value = zz16;
}

function card17() {
    var zz17 = document.getElementById("credit17").innerHTML;
    document.getElementById("credit").value = zz17;
}

function card18() {
    var zz18 = document.getElementById("credit18").innerHTML;
    document.getElementById("credit").value = zz18;
}

function card19() {
    var zz19 = document.getElementById("credit19").innerHTML;
    document.getElementById("credit").value = zz19;
}

function card20() {
    var zz20 = document.getElementById("credit20").innerHTML;
    document.getElementById("credit").value = zz20;
}

function card21() {
    var zz21 = document.getElementById("credit21").innerHTML;
    document.getElementById("credit").value = zz21;
}

function card22() {
    var zz22 = document.getElementById("credit22").innerHTML;
    document.getElementById("credit").value = zz22;
}

function card23() {
    var zz23 = document.getElementById("credit23").innerHTML;
    document.getElementById("credit").value = zz23;
}

function card24() {
    var zz24 = document.getElementById("credit24").innerHTML;
    document.getElementById("credit").value = zz24;
}

function card25() {
    var zz25 = document.getElementById("credit25").innerHTML;
    document.getElementById("credit").value = zz25;
}

function card26() {
    var zz26 = document.getElementById("credit26").innerHTML;
    document.getElementById("credit").value = zz26;
}

