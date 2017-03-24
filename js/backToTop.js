(function() {
  $(function() {
    var $backToTop, scrollTopDuration;
    scrollTopDuration = 300;
    $backToTop = $('.back-to-top');
    return $backToTop.click(function(event) {
      if ($(event.target).hasClass('back-to-top')) {
        event.preventDefault();
        return $('body,html').animate({
          scrollTop: 0
        }, scrollTopDuration);
      }
    });
  });

}).call(this);
