var pContainerHeight = $('.robot-box').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight+200) {

    console.log(wScroll)

/*    $('header').css({
      'height' : 50 + '%',
      'width' : 50 + '%',
    });*/

    $('.robot-box').css({
      'height' : 90*(pContainerHeight-wScroll)/(pContainerHeight)+10 + 'vh',
    });

    $('.logo').css({
      'top' : 10*(pContainerHeight-wScroll)/(pContainerHeight) + '%',
      'height' : 40*(pContainerHeight-wScroll)/(pContainerHeight) + '%',
      'width' : 50*(pContainerHeight-wScroll)/(pContainerHeight) + '%',
    });

    $('.icons').css({
      'transform' : 'translate(0px, '+ wScroll /5 +'%)',
      'height' : 50 + '%',
      'width' : 50 + '%',
    });

    $('.fore-bird').css({
      'top' : (-45)*(wScroll)/(pContainerHeight)+60+ '%',
      'height' : 45*(pContainerHeight-wScroll)/(pContainerHeight) + '%',
      'width' : 50*(pContainerHeight-wScroll)/(pContainerHeight) + '%',
    });



  }


  // Landing Elements
  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }


  // Promoscope
  if(wScroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity});

  }


  // Floating Elements

  if(wScroll > $('.blog-posts').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
});
