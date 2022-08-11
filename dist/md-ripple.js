($ => {
  $(() => {
    function startRipple(e) {
      const $ = jQuery;
      const clickX = ($(e.target).hasClass('ripple') ? (e.target.offsetLeft - e.target.offsetWidth/2) : 0) + e.offsetX;
      const clickY = ($(e.target).hasClass('ripple') ? (e.target.offsetTop - e.target.offsetHeight/2) : 0) + e.offsetY;
      const elementColor = $(e.currentTarget).data('ripple-color');
      const color = (undefined === elementColor || elementColor.length < 1) ? 'rgba(127, 127, 127, 0.3)' :
        ('random' === elementColor ? 'rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+', 0.3)' : elementColor);
      const ripple = $('<div class="ripple active-ripple" />')
        .attr('startTimeMillis', performance.now())
        .css('background-color', color)
        .css('left', clickX+'px')
        .css('top', clickY+'px');
      if($(e.currentTarget).children('.ripples-container').length < 1) {
        $(e.currentTarget).append($('<div class="ripples-container" />'));
      }
      $(e.currentTarget).children('.ripples-container').append(ripple);
      requestAnimationFrame(drawRippleFrame(ripple));
    }
    function drawRippleFrame(ripple) {
      return (currentTimeMillis) => {
        const currentDurationMillis = currentTimeMillis - ripple.attr('startTimeMillis');
        ripple
          .css('width', (currentDurationMillis)+'px')
          .css('height', (currentDurationMillis)+'px');
        if(ripple.hasClass('active-ripple')) {
          requestAnimationFrame(drawRippleFrame(ripple));
          return;
        }
        const currentEndDurationMillis = currentTimeMillis - ripple.attr('endTimeMillis');
        const opacity = 1-currentEndDurationMillis/200;
        if(opacity < 0) {
          ripple.remove();
          return;
        }
        ripple.css('opacity', opacity);
        requestAnimationFrame(drawRippleFrame(ripple));
      };
    }
    function fadeRipplesOut() {
      const $ = jQuery;
      $('.ripple.active-ripple').removeClass('active-ripple').attr('endTimeMillis', performance.now());
    }
    $('.with-ripple').append($('<div class="ripples-container" />'));
    $(document.body).on('mousedown', '.with-ripple', startRipple);
    $(window).on('mouseup', fadeRipplesOut);
  });
})(jQuery);