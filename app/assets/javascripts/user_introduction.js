$(function(){
  $(document).on('turbolinks:load',function(e){
   e.preventDefault();
  $('.main-user-box-introduction').hide().eq(0).show();
  $('li').click(function(e){
    e.preventDefault();
   
    var index = $('li').index(this);
    $('.main-user-box-introduction ').eq(index).show().siblings('.main-user-box-introduction').hide();

  });
});
});