jQuery(document).ready(function($){

    //ACCESSIBILITY

    $('.accessibility-main-btn').click(function(){
      if(!$('.accessibility-action').hasClass('active')){
        $('.accessibility-action').fadeIn().addClass('active');
      } else {
        $('.accessibility-action').fadeOut().removeClass('active');
      }
    });


    $('.accessibility-adjust').on('click', function() {
        if ($(this).attr('id') == "is_normal_contrast") {
            $('head').append($("<link href='" + sl_accessibillity_button_contrast_path+ "' id='highContrastStylesheet' rel='stylesheet' type='text/css' />"));
            $('body').addClass('contrast');
            $(this).attr('id', 'is_high_contrast').attr('aria-pressed', true).addClass('active');
            createCookie('a11y-high-contrast', '1');
        } else {
            $('#highContrastStylesheet').remove();
            $('body').removeClass('contrast');
            $(this).attr('id', 'is_normal_contrast').attr('aria-pressed', false).removeClass('active');
            eraseCookie('a11y-high-contrast');
        }
    });



    $('.accessibility-grayscale').click(function(){
      if($('body').hasClass('acc-grayscale')){
        $('body').removeClass('acc-grayscale');
      } else {
        $('body').addClass('acc-grayscale');
      }
    });

    $('.accessibility-text').click(function(){
      var w = window.outerWidth;
      if(!$(this).hasClass('textsize1') && !$(this).hasClass('textsize2')){
        $('html').css('font-size', '75%');
        $(this).addClass('textsize1');
      } else if($(this).hasClass('textsize1')){
        $('html').css('font-size', '85%');
        $(this).removeClass('textsize1');
        $(this).addClass('textsize2');
      } else if($(this).hasClass('textsize2')){
        $('html').css('font-size', '62.5%');
        $(this).removeClass('textsize1');
        $(this).removeClass('textsize2');
      }
    });

    $('.accessibility-white').click(function(){
       if($('body').hasClass('acc-bg-white-important')){
          $('body').removeClass('acc-bg-white-important');
          $('div, h1, h2, h3, p, span, input').each(function(i, obj) {
            $(this).removeClass('acc-bg-white-important');
          });
        } else {
          $('body').addClass('acc-bg-white-important');
          $('div, h1, h2, h3, p, span, input').each(function(i, obj) {
            $(this).addClass('acc-bg-white-important');
          });
        }
    });

    $('.accessibility-font').click(function(){
       if($('body').hasClass('acc-font')){
          $('body').removeClass('acc-font');
          $('div, h1, h2, h3, p, span, input').each(function(i, obj) {
            $(this).removeClass('acc-font');
          });
        } else {
          $('body').addClass('acc-font');
          $('div, h1, h2, h3, p, span, input').each(function(i, obj) {
            $(this).addClass('acc-font');
          });
        }
    });

})