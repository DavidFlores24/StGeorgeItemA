// JavaScript Document

function initialize() {
	"use strict";
	var stGeorge = {lat: 51.4542692, lng: -2.6037565};
	var map = new google.maps.Map(document.getElementById('map'), {
		center: stGeorge,
		zoom: 14
	});
	
	var panorama = new google.maps.StreetViewPanorama(
		document.getElementById('streetView'), {
			position: stGeorge,
			pov: {
			heading: 34,
			pitch: 10
			}
		});
	map.StreetView(panorama);
}

//
//      function initialize() {
//        var fenway = {lat: 42.345573, lng: -71.098326};
//        var map = new google.maps.Map(document.getElementById('map'), {
//          center: fenway,
//          zoom: 14
//        });
//        var panorama = new google.maps.StreetViewPanorama(
//            document.getElementById('pano'), {
//              position: fenway,
//              pov: {
//                heading: 34,
//                pitch: 10
//              }
//            });
//        map.setStreetView(panorama);
//      }
//    </script>
//    <script async defer
//        src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initialize">
//    </script>
//  </body>
//</html>