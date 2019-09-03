  $(document).on('turbolinks:load', function(){
  
   
    if($('.upload-image').length ==1){
      $('#form_upload').append(v);
      $('#form_upload').append(v);
      $('#form_upload').append(v);
    
   }else if($('.upload-image').length ===2){
    $('#form_upload').append(html);
    $('#form_upload').append(html);
    
   }else if($('.upload-image').length ==3){
    $('.images-container__boxes__boxes').append(v);
    
   }
  //  return
  

        $('.upload-image').change('change',function(e){
          var target =$('.label-desc').eq(0);
          $('.label-desc').eq(0).css("display","none");
         var target =$(this).next('.label-desc');
          target.css("display","block");
          $(this).prev('.label-desc').css("display","none");
          var form_upload = $('#form_upload');
          var v =$(`<label class="label-desc" for="product_product_images_attributes_0_ドラッグ&amp;ドロップ">ドラッグ&amp;ドロップ</label>
          <input class="upload-image" accept="image/*" multiple="multiple" name="product_images[image][]" id="input-image" type="file"></input>`);
          var html ='<input class="upload-image" accept="image/*" multiple="multiple" name="product_images[image][]" id="input-image" type="file"></input>';
        //   if($('.upload-image').length ==1){
        //     $('#form_upload').append(v);
        //     $('#form_upload').append(v);
        //     $('#form_upload').append(v);
          
        //  }else if($('.upload-image').length ===2){
        //   $('#form_upload').append(html);
        //   $('#form_upload').append(html);
          
        //  }else if($('.upload-image').length ==3){
        //   $('.images-container__boxes__boxes').append(v);
          
        //  }
          var file = e.target.files[0],
           reader = new FileReader();
          
          reader.onload = (function (e) {
            var image_preview = $(`<div class ="images-container__boxes__box"><img></img>
            </div>
           
        `);
          image_preview.find('img').attr({
            src: e.target.result,
            title: file.name,
            class:"product_image" });
            $('.images-container__boxes__boxes').append(image_preview);
            image_preview.find('image').attr({
              src: e.target.result,
              title: file.name,
              class:"product_image" });
              $('.images-container__boxes__boxes').append(image_preview);
            
            
          
            
      
          //   if (image_length == 0 ) {
          //     $('.images-container__boxes__boxes').hide();
          //   } else if (image_length > 0 && image_length < 5) {
          //     $('#input_image').find('').removeClass()
          //                       .addClass('upload'+'image_length')
          //                       .prop("required",false)
          //                       .clone(true)
          //                       .val('')
          //                       .removeClass()
          //                       .prependTo(form_upload);
          //     $('#input_image').nextAll()
          //                       .hide();
          //     $('.form_upload__text').show()
          //                             .css("bottom", "100px");
          //     if(image_length == 3){
          //       $('.form_upload__text').css("bottom", "110px");
          //     }else if(image_length == 4){
          //       $('.form_upload__text').css("bottom", "130px");
          //     }
          //   } else if (image_length == 5){
          //     $('#input_image').removeClass()
          //                       .addClass('upload'+ image_length)
          //                       .prop("required",false)
          //                       .clone(true)
          //                       .val('')
          //                       .removeClass()
          //                       .prependTo(form_upload);
          //     $('#input_image').nextAll()
          //                       .hide();
          //     $(form_upload).hide();
          //   }
          })
          reader.readAsDataURL(file);
          })
        
          });
        