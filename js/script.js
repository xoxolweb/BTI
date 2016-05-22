  $(document).ready(function() {
  //MENU resize 
      var touch = $('#touch_menu');
      var menu = $('nav');

      $(touch).on('click', function(e) {
          e.preventDefault();
          menu.slideToggle();
      });
      $(window).resize(function() {
          var wid = $(window).width();
          if (wid > 760 && menu.is(':hidden')) {
              menu.removeAtrr('style')
          }
      })
      $(".toggle-mnu").click(function() {
          $(this).toggleClass("on");
          $(".main-mnu").slideToggle();
          return false;
      });


  })
