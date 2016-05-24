  $(document).ready(function() {
      //MENU resize
      var wid = $(window).width();

      var touch = $('#touch_menu');
      var menu = $('nav');

      $(touch).on('click', function(e) {
          e.preventDefault();
          menu.slideToggle();
      });
      $(window).resize(function() {
          if (wid > 760 && menu.is(':hidden')) {
              menu.removeAtrr('style')
          }
      })

      $(".toggle-mnu").click(function() {
          $(this).toggleClass("on");
          $(".main-mnu").slideToggle();
          return false;
      });



      //SECTION_SERVICES menu
      var touchServices = $('.services_nav_cont>a');
      var menuServices = $('.services_nav_cont ul');

      if (wid <= 980) {


          $(document).click(function(event) {
              if ($(event.target).closest(menuServices).length)
                  return;
              $(menuServices).slideUp(300);
              event.stopPropagation();
          });
          $(touchServices).click(function() {

              $(this).siblings(menuServices).slideToggle(300);
              return false;
          });

          $(touchServices).click(function() {
              $(this).toggleClass('gort');
          });

      }

  })
