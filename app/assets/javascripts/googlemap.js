document.addEventListener('turbolinks:load', function(e){
e.preventDefault();
  var url   = location.href;
  var collect ="/\d";
  var a =url.match("http://localhost:3000/products/[0-9]*?$");
  var b =url.match("http://localhost:3000/products/[0-9]*?/[^a-zA-Z]+");
  
    if(a){
     var handler = Gmaps.build('Google');
     
     handler.buildMap({
      provider: {
        disableDefaultUI: true
        // pass in other Google Maps API options here
        
      },
      internal: {
        id: 'map'
      }
    },
    
    function(){
    
      var box = $('.map-lat').text();
      var desk =$('.map-log').text();
      var address = $('.map-address').text();
      markers = handler.addMarkers([
        {
         
          "lat": box,
          "lng": desk,
          "infowindow":address
         
        }
      ]);
     
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();
      handler.getMap().setZoom(16);
      
    }
   
  );

  };
});