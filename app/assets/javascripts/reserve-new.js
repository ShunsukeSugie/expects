$(function(){

$(document).on('turbolinks:load', function(){
  
  var url   = location.href;
  if(url.match('http://localhost:3000/purchases/new')||url.match('http://localhost:3000/products/[0-9]*?/reserves')||url.match('http://localhost:3000/reserves/[0-9]*?/purchases/new')){
    var reserve = '<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable fc-resizable"><div class="fc-content"> <span class="fc-title">予約可能日</span></div><div class="fc-resizer fc-end-resizer"></div></a>';
      console.log(gon.reserves);
    // var links =`<a class="link-purchase" href =${link}></a>`;
        if($('.date-field').val()==$('.fc-future').data()){
          return
        }else{
          gon.reserves.forEach(function(value,index){
            const v =value;
            console.log(v);
            const i =index
            var target= $('.fc-future').filter(`[data-date =${v}]`);
            var e =   target.append(reserve);
         
          gon.reserve_ids.forEach(function(value,index){
            (reserve);
            var s=value;
              var links =`<a class="link-purchase" href ="/reserves/${s}/purchases/new"></a>`;
              // target.append(links);
          if(i+1 == s){
            target.append(links);
          }
            });
        });
        }
        
   var target = $('#calender').find('.fc-future')
  $('.fc-future').click(function() {
    // var elements =$(this).data('date');
  if($(this).find('a').hasClass('fc-event')){
    return
      // $('.date-field').val(elements);
  if($('.purchase-new__date p').hasClass('date-data')){
    $('.date-data').text(elements);
  }else{
  $('.purchase-new__date').append('<p class ="date-data"></p>');
  $('.date-data').text(elements);
 };
}else{
  return
  };
  });
   $('.member-field').change(function(){
    var member = $(this).val()
    var price = $('.price').text();
    var total = price *member
    $('.price-field').val(total);
  });
  $(document).on('click', 'button', function(){
    var reserve = '<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable fc-resizable"><div class="fc-content"> <span class="fc-title">予約可能日</span></div><div class="fc-resizer fc-end-resizer"></div></a>';
    console.log(gon.reserves);
    // $(".fc-future[data-date='2019-08-23']").remove();
    // $(".fc-future[data-date= '2019-08-23']").append(reserve);
    if($('.date-field').val()==$('.fc-future').data()){
        return
      }else{
        gon.reserves.forEach(function(value,index){
          var v =value;
          var target= $('.fc-future').filter(`[data-date =${v}]`);
             target.append(reserve);
        });
      }
    $('.fc-future').click(function() {
      var elements =$(this).data('date');
    
    if($(this).find('a').hasClass('fc-event')){
        $('.date-field').val(elements);
    
    if($('.purchase-new__date p').hasClass('date-data')){
      $('.date-data').text(elements);
    }else{
    $('.purchase-new__date').append('<p class ="date-data"></p>');
    $('.date-data').text(elements);
      // $(this).css("background","red");
      // $(this).siblings().css('background','');
  };
}else{
  return
}

  });
});
 };
});
});
