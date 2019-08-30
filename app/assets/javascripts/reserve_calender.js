$(function(){

  $(document).on('turbolinks:load', function(){
    $('.fc-past').css("background","lightgray");

    var url   = location.href;
    if(url.match('http://localhost:3000/products/[0-9]*?/reserves/new')||url.match("https://expects.herokuapp.com/products/122/reserves/new")){
      $('#confirm').css("display","none");
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
               gon.status.forEach(function(value,index){
                if(i=index){
      
                  target.attr('id', 'style'+value);

                }

              })
          });
        }
         $('#style2').find('fc-title').text('売り切れ');
         $('#style2').removeClass('fc-future');
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
        function  openModal2(){
          $(function(){
            $('.js-modal2').fadeIn();
            $('#calendar').css("opacity","0");
            // $('.date-field').last().val(elements);
          });
       }
        function closeModal2(){
          $(function(){
            $('.right2').click(function(){
              // $('.date-field').val(elements);
                $('#calendar').css("opacity","1");
                $('.js-modal2').fadeOut();
            });
            $('.left2').click(function(){
              
              var ele =$('.date-field').last().val();
              var tag= $('.fc-future').filter(`[data-date =${elements}]`);
                 tag.find('.fc-event').remove();;
              $('.date-field').filter(`[value =${elements}]`).remove();
              $('.date-data').remove();
              $('#calendar').css("opacity","1");
              $('.js-modal2').fadeOut();
            });
            
          });
        }
          if($(this).find('a').hasClass('fc-event')){
            
            $('.modal__content').append('<p class ="date-data"></p>');
            $('.date-data').next().remove();
            $('.date-data').text(elements+"を予約不可にしますか?");
            openModal2();
            closeModal2();
            
            
           
           return
          }else{
            $(this).append(reserve);
          }
          //２回目以降の処理
        if($('.modal__content p').hasClass('date-data')){
          $('.date-data').text(elements+"を予約可能にしますか?");
          $('.purchase-new__date p').append('<input multiple="multiple" name="reserves[date][]" class="date-field target_date" required="required" type="hidden" id="target_date"></input>');
          // $('.js-modal').fadeIn();
          // $('#calendar').css("opacity","0");
          // $('.date-field').last().val(elements);
          openModal();
          // editの処理の時
        }else if($('.date-field').has('#reserve_date')){
          $('.modal__content').append('<p class ="date-data"></p>');
          $('.date-data').text(elements+"を予約可能にしますか?");
          $('.purchase-new__date p').append('<input multiple="multiple" name="reserves[date][]" class="date-field target_date" required="required" type="hidden" id="target_date"></input>');
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
        $('.fc-past').css("background","lightgray");
        var target_date =$('.purchase-new__date p').children('#target_date').val();
        console.log(target_date);
        // t.append(reserve);
        
        // var b = elem.siblings();
        // console.log(b);
        　var arr=$("[id=target_date]");
        $('.target_date').each(function(index,elem){
          // console.log(i);
          // console.log(elem);
          // debugger
          var tag=$('.target_date').eq(index).val();
          var i =index
          console.log(tag);
          $('.fc-future').filter(`[data-date =${tag}]`).append(reserve);
          
          console.log(i);
        });
        
        if($('.date-field').val()==$('.fc-future').data()){
        
          return
        }else{
          gon.reserves.forEach(function(value,index){
            var v =value;
            var target= $('.fc-future').filter(`[data-date =${v}]`);
               target.append(reserve);
          });
        }
      //   var s =$('#target_date').val();
      //   console.log (s);
      // var t = $('.fc-future').filter(`[data-date =${s}]`);
      //     t.append(reserve);
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
        function  openModal2(){
          $(function(){
            $('.js-modal2').fadeIn();
            $('#calendar').css("opacity","0");
            // $('.date-field').last().val(elements);
          });
       }
        function closeModal2(){
          $(function(){
            $('.right2').click(function(){
              // $('.date-field').val(elements);
                $('#calendar').css("opacity","1");
                $('.js-modal2').fadeOut();
            });
            $('.left2').click(function(){
              console.log(elements);
              console.log(ele)
              var ele =$('.date-field').last().val();
              var tag= $('.fc-future').filter(`[data-date =${elements}]`);
                 tag.find('.fc-event').remove();;
              $('.date-field').filter(`[value =${elements}]`).remove();
              $('.date-data').remove();
              $('#calendar').css("opacity","1");
              $('.js-modal2').fadeOut();
            });
            
          });
        }
          if($(this).find('a').hasClass('fc-event')){
            $('.modal__content').append('<p class ="date-data"></p>');
            $('.date-data').next().remove();
            $('.date-data').text(elements+"を予約不可にしますか?");
            openModal2();
            closeModal2();
          return
          }else{
            $(this).append(reserve);
          }
        
        if($('.modal__content p').hasClass('date-data')){
          $('.date-data').text(elements+"を予約可能にしますか?");
          $('.purchase-new__date p').append('<input multiple="multiple" name="reserves[date][]" class="date-field" required="required" type="hidden" id="target_date"></input>');
          
         openModal();
        }else if($('.date-field').has('#reserve_date')){
          $('.modal__content').append('<p class ="date-data"></p>');
          $('.date-data').text(elements+"を予約可能にしますか?");
          $('.purchase-new__date p').append('<input multiple="multiple" name="reserves[date][]" class="date-field" required="required" type="hidden" id="target_date"></input>');
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

