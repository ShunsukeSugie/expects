$(function(){
  $(document).on('turbolinks:load',function(e){
   e.preventDefault();
  $('.user-edit__box').hide().eq(0).show();
  $('li').click(function(e){
    e.preventDefault();
   
    var index = $('li').index(this);
    $('.user-edit__box ').eq(index).show().siblings('.user-edit__box').hide();

  });
});
});