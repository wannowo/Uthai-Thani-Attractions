// ===================================== copy zone =======================================================\\
$(document).ready(function(){
        /*Smooth scrolling*/
        // Select all links with hashes
        $('a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
              &&
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
                  scrollTop: target.offset().top
                }, 800, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  };
                });
              }
            }
          });
});
// ===================================== copy zone ======================================================\\



$(document).ready(function(){
  $(window).scroll(function(){
    //navbar hiding
    if ($(document).scrollTop() > 500) {
      $(".navbar").css("background-color", "#fff");
      $(".navbar a").css("color", "#0D1D3A");
      $("#Logo").attr('src', 'pic/uthaithani.png');
      $(".navbar").css("top", "0");
    } else {
      $(".navbar").css("top", "-100px");
    }
    //appearing
    $(".appear").each(function(){
      let bottom_of_object = $(this).offset().top + $(this).outerHeight();
      let bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},500);
      }
    });
  });
    $(".dish_menu").hover(function(){
      $(this).find(".discb").css("opacity", "1");
      $(this).find("img").css("opacity", ".5");
    },
      function(){
      $(this).find(".discb").css("opacity", "0");
      $(this).find("img").css("opacity", "1");
      });


  //show text menu
});

$(document).ready(function(){
  //show navbar while your not on the top
  if ($(document).scrollTop() > 500) {
    $(".navbar").css("background-color", "#fff");
    $(".navbar a").css("color", "#0D1D3A");
    $("#Logo").attr('src', 'pic/uthaithani.png');
    $(".navbar").css("top", "0");
  } else {
    $(".navbar").css("top", "-100px");
  }
  //1st place
  $("#place1").hover(function(){
    $("#description h1").css("transform", "translateY(6vh)");
    $("#description p").css("transform", "translateY(44vh)");
    $(".att-img img").css("opacity", '.5');
  },
  function(){
    $("#description h1").css("transform", "translateY(-13vh)");
    $("#description p").css("transform", "translateY(80vh)");
    $(".att-img img").css("opacity", '1');
  });

  //2nd place
  $("#place2").hover(function(){
    $("#description2 h1").css("transform", "translateY(-74vh)");
    $("#description2 p").css("transform", "translateY(-40vh)");
    $(".att-img2 img").css("opacity", '.5');
  },
  function(){
    $("#description2 h1").css("transform", "translateY(-100vh)");
    $("#description2 p").css("transform", "translateY(-10vh)");
    $(".att-img2 img").css("opacity", '1');
  });

  //3rd place
  $("#place3").hover(function(){
    $("#description3 h1").css("transform", "translateY(-74vh)");
    $("#description3 p").css("transform", "translateY(-36vh)");
    $(".att-img3 img").css("opacity", '.5');
  },
  function(){
    $("#description3 h1").css("transform", "translateY(-100vh)");
    $("#description3 p").css("transform", "translateY(-10vh)");
    $(".att-img3 img").css("opacity", '1');
  });

  //dish_menu
  $("#snd").click(function(){
    $(".menu").css("transform", "translateX(-1944px)");
    $("#snd").addClass("active");
    $("#fst").removeClass("active");
  });
  $("#fst").click(function(){
    $(".menu").css("transform", "translateX(0)");
    $("#fst").addClass("active");
    $("#snd").removeClass("active");
  });

  //img slide show

  $(function () {

    /* SET PARAMETERS */
    var change_img_time     = 3500;
    var transition_speed    = 600;

    var simple_slideshow    = $("#Slider"),
        listItems           = simple_slideshow.children('li'),
        listLen             = listItems.length,
        i                   = 0,

        changeList = function () {

            listItems.eq(i).fadeOut(transition_speed, function () {
                i += 1;
                if (i === listLen) {
                    i = 0;
                }
                listItems.eq(i).fadeIn(transition_speed);
            });

        };

    listItems.not(':first').hide();
    setInterval(changeList, change_img_time);
  }); //slide show1

  $(function () {

  /* SET PARAMETERS */
  var change_img_time     = 3500;
  var transition_speed    = 600;

  var simple_slideshow    = $("#Slider2"),
      listItems           = simple_slideshow.children('li'),
      listLen             = listItems.length,
      i                   = 0,

      changeList = function () {

          listItems.eq(i).fadeOut(transition_speed, function () {
              i += 1;
              if (i === listLen) {
                  i = 0;
              }
              listItems.eq(i).fadeIn(transition_speed);
          });

      };

  listItems.not(':first').hide();
  setInterval(changeList, change_img_time);
});
});
