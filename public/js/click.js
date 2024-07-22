
function changelocation() 
{
  document.getElementById("submitbutton").style.visibility = "visible";
  // document.getElementById("search_box2").style.visibility = "visible";


	var city = document.getElementById("search_categories").value;
  var month = document.getElementById("search_month").value;
  // var month = document.getElementById("search_categories2").value;
	city+=',india';
     var geocoder =  new google.maps.Geocoder();
    geocoder.geocode( { 'address': city}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
          	var mapOptions = {
        center: new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.HYBRID
   					 }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
			
          } 
          else 
          {
          }
   
  });
 // get the chosen value
}



