$(document).on('turbolinks:load',function(){
  var firstSelecthtml = `<option value="---">---</option>`;
  function foamHtml(category) {
    var html = `<option value="${category.id}">${category.name}</option>`;
    return html;
};
$('.collection--category-children').css("display","none");
 $('#product_category_id').change(function(e){
   e.preventDefault();
  
  var parent_id = $(".collection--category").val();
  $.ajax({
    type:    'GET',
    url:     '/products/select_category',
    data:    { parent_id: parent_id },
    dataType: 'json'
  })
   .done(function(child_ids){
    $('.collection--category-children').empty();
    $('.collection--category-children').parent().css("display", "");
    $(".collection--category-children").append(firstSelecthtml);
   
    child_ids.forEach(function(child) {
      var html = foamHtml(child);
      $(".collection--category-children").append(html);
      $('.collection--category-children').css("display","block");
    });
    
  });
  });

 });