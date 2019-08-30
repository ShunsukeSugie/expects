$(function(){
  $(document).on('turbolinks:load',function(e){
   e.preventDefault();
  $('.main-user-box-introduction').hide().eq(0).show();
  $('.side').click(function(e){
    e.preventDefault();
    
    var index = $('.side').index(this);
    console.log(index);
    $('.main-user-box-introduction').eq(index).show().siblings('.main-user-box-introduction').hide();
    debugger
  });
});
});
