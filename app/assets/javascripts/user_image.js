$(document).on('turbolinks:load',function(){


$('form').on('change','input[type ="file"]',function(e){
   
    var file =e.target.files[0];
    reader =new FileReader(),
    reader.onload = (function(e){
      var image_preview = $(`<div class ="avatar_box"><img></img></div>`);
      image_preview.find('img').attr({
        src:e.target.result,
        title:file.name,
        class:"avatar_image"
      });
      $('.user-edit__box__top--right').append(image_preview);
    
                          })
    reader.readAsDataURL(file);
  })
  
});
