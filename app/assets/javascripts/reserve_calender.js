$(function(){

  $(document).on('turbolinks:load', function(){
    // $('.fc-day').css("background","gray");
    var url   = location.href;
    if(url.match('http://localhost:3000/products/[0-9]*?/reserves/new')){
      $('#confirm').css("display","none");
      var reserve = '<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable fc-resizable"><div class="fc-content"> <span class="fc-title">予約可能日</span></div><div class="fc-resizer fc-end-resizer"></div></a>';
      console.log(gon.reserves);
      // $(".fc-future[data-date='2019-08-23']").remove();
      // $(".fc-future[data-date= '2019-08-23']").append(reserve);
        if($('.date-field').val()!=$('.fc-future').data()&&gon.reserves !=[]){
        
       
          gon.reserves.forEach(function(value,index){
            var v =value;
            var target= $('.fc-future').filter(`[data-date =${v}]`);
               target.append(reserve);
          });

        }

      var $target =$('.fc-future')
      $('fc-future').append()
        $target.click(function() {
          
          var elements =$(this).data('date');
          $('td').remove('fc-event-container');
        var reserve = '<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable fc-resizable"><div class="fc-content"> <span class="fc-title">予約可能日</span></div><div class="fc-resizer fc-end-resizer"></div></a>';
        function  openModal(){
          $(function(){
            $('.js-modal').fadeIn();
            $('#calendar').css("opacity","0");
            $('.date-field').last().val(elements);
          });
       }
        function closeModal(){
          $(function(){
            $('.left').click(function(){
              // $('.date-field').val(elements);
                $('#calendar').css("opacity","1");
                $('.js-modal').fadeOut();
            });
            $('.right').click(function(){
              console.log(elements);
              var ele =$('.date-field').last().val();
              var tag= $('.fc-future').filter(`[data-date =${ele}]`);
                 tag.find('.fc-event').remove();;
              $('.date-field').last().remove();
              // $('.fc-event').eq(index+1).remove();

              // $('.fc-future').filter(`[data-date =${elements}]`).find('.fc-event').remove();
              $('#calendar').css("opacity","1");
              $('.js-modal').fadeOut();
            });
            
          });
        }
          if($(this).find('a').hasClass('fc-event')){
            return
          }else{
            $(this).append(reserve);
          }
          // ２回目以降の処理
        if($('.modal__content p').hasClass('date-data')){
          $('.date-data').text(elements+"を予約可能にしますか?");
          $('.purchase-new__date p').append('<input multiple="multiple" name="reserves[date][]" class="date-field" required="required" type="hidden" id="reserve_date"></input>');
          // $('.js-modal').fadeIn();
          // $('#calendar').css("opacity","0");
          // $('.date-field').last().val(elements);
          openModal();
          // editの処理の時
        }else if($('.date-field').has('#reserve_date')){
          $('.modal__content').append('<p class ="date-data"></p>');
          $('.date-data').text(elements+"を予約可能にしますか?");
          $('.purchase-new__date p').append('<input multiple="multiple" name="reserves[date][]" class="date-field" required="required" type="hidden" id="reserve_date"></input>');
          // $('.js-modal').fadeIn();
          // $('#calendar').css("opacity","0");
          // $('.date-field').last().val(elements);
          openModal();
          closeModal();


        // $('.left').click(function(){
        //   // $('.date-field').val(elements);
        //     $('#calendar').css("opacity","1");
        //     $('.js-modal').fadeOut();
        // });
        // $('.right').click(function(){
        //   $('.date-field').last().remove();
        //   $('.fc-event').last().remove()
        //   $('#calendar').css("opacity","1");
        //   $('.js-modal').fadeOut();
  
        
      // １回目の処理
        }else{
        $('.modal__content').append('<p class ="date-data"></p>');
        $('.date-data').text(elements+"を予約可能にしますか?");
        // $('.js-modal').fadeIn();
        // $('#calendar').css("opacity","0");
        // $('.date-field').val(elements);
        openModal();
      closeModal();
      
      // $('.left').click(function(){
        
      //     $('#calendar').css("opacity","1");
      //     $('.js-modal').fadeOut();
      // });
      // $('.right').click(function(){
      //   $('.date-field').last().remove();
      //   $('.fc-event').last().remove()
      //   $('#calendar').css("opacity","1");
      //   $('.js-modal').fadeOut();

      // })
    
    };
    
  });
      $(document).on('click', 'button', function(){
        $('#confirm').css("display","none");
        var reserve = '<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable fc-resizable"><div class="fc-content"> <span class="fc-title">予約可能日</span></div><div class="fc-resizer fc-end-resizer"></div></a>';
        console.log(gon.reserves);
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
          
          $('td').remove('fc-event-container');
        var reserve = '<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable fc-resizable"><div class="fc-content"> <span class="fc-title">予約可能日</span></div><div class="fc-resizer fc-end-resizer"></div></a>';
        function  openModal(){
          $(function(){
            $('.js-modal').fadeIn();
            $('#calendar').css("opacity","0");
            $('.date-field').last().val(elements);
          });
       }
        function closeModal(){
          $(function(){
            $('.left').click(function(){
              // $('.date-field').val(elements);
                $('#calendar').css("opacity","1");
                $('.js-modal').fadeOut();
            });
            $('.right').click(function(){
              console.log(elements);
              var ele =$('.date-field').last().val();
              var tag= $('.fc-future').filter(`[data-date =${ele}]`);
                 tag.find('.fc-event').remove();;
              $('.date-field').last().remove();
              // $('.fc-event').eq(index+1).remove();

              // $('.fc-future').filter(`[data-date =${elements}]`).find('.fc-event').remove();
              $('#calendar').css("opacity","1");
              $('.js-modal').fadeOut();
            });
            
          });
        }
          if($(this).find('a').hasClass('fc-event')){
            return
          }else{
            $(this).append(reserve);
          }
        
        if($('.modal__content p').hasClass('date-data')){
          $('.date-data').text(elements+"を予約可能にしますか?");
          $('.purchase-new__date p').append('<input multiple="multiple" name="reserves[date][]" class="date-field" required="required" type="hidden" id="reserve_date"></input>');
          
         openModal();
        }else if($('.date-field').has('#reserve_date')){
          $('.modal__content').append('<p class ="date-data"></p>');
          $('.date-data').text(elements+"を予約可能にしますか?");
          $('.purchase-new__date p').append('<input multiple="multiple" name="reserves[date][]" class="date-field" required="required" type="hidden" id="reserve_date"></input>');
          // $('.js-modal').fadeIn();
          // $('#calendar').css("opacity","0");
          // $('.date-field').last().val(elements);
          openModal();
          closeModal();
        }else{
        
        $('.modal__content').append('<p class ="date-data"></p>');
        $('.date-data').text(elements+"を予約可能にしますか?");
        openModal();
        
      closeModal();
    }
   });
 });
};
  });
});