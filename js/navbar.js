(function() {
  var closetimer, ddmenuitem, ddmenutab, nav_canceltimer, nav_close, nav_open, nav_timer, timeout;

  timeout = 300;

  closetimer = 0;

  ddmenutab = 0;

  ddmenuitem = 0;

  nav_open = function() {
    nav_canceltimer();
    nav_close();
    ddmenutab = $(this).addClass('open');
    return ddmenuitem = $(this).find('ul').eq(0).css('visibility', 'visible');
  };

  nav_close = function() {
    if (ddmenutab) {
      ddmenutab.removeClass('open');
    }
    if (ddmenuitem) {
      return ddmenuitem.css('visibility', 'hidden');
    }
  };

  nav_timer = function() {
    return closetimer = window.setTimeout(nav_close, timeout);
  };

  nav_canceltimer = function() {
    if (closetimer) {
      window.clearTimeout(closetimer);
      return closetimer = null;
    }
  };

  $(document).ready(function() {
    $('#navbar > ul > li').bind('mouseover', nav_open);
    return $('#navbar > ul > li').bind('mouseout', nav_timer);
  });

  document.onclick = nav_close;

}).call(this);
