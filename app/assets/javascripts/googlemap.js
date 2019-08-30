document.addEventListener('turbolinks:load', function(e){
e.preventDefault();
  var url   = location.href;
  var collect ="/\d";
  var a =url.match("http://localhost:3000/products/[0-9]*?$");
  var b =url.match("expects.herokuapp.com/products/[0-9]*?$");
  var c =url.match("[^http://localhost:3000/products/[0-9]*?/reserves]");
  var d =url.match("[^expects.herokuapp.com/products/[0-9]*?/reserves]");
    if(a||b||c||d){
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
         
          "lat": 35.6851750,
          "lng": 139.7527995,
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