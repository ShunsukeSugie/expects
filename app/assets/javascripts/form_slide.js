$(document).on('turbolinks:load', function(){
  $(function(){
    $('.product_main__image').hide();
    $('.product_main__image:first').addClass('active').show();
   
   
    setInterval(function() {
      var $showImage = $('.product_main__image.active');
      if ($showImage.next('img').length) {
        var $nextImage = $showImage.next('img');
      } else {
        var $nextImage = $('.product_main__image:first');
      }
      $showImage.fadeOut(3000).removeClass('active');
      $nextImage.fadeIn(3000).addClass('active')
    }, 5000);
  });

  });