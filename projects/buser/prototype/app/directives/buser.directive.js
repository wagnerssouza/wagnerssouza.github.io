 (
 	function(){

 		angular.module('app').
		directive('myMap', function() {
	    // directive link function
	    var link = function(scope, element, attrs) {
	        var map, infoWindow;
	        var markers = [];
	        
	        // map config
	        var mapOptions = {
	            center: {lat: -23.5489, lng: -46.6388},
	            zoom: 13,
	            mapTypeId: google.maps.MapTypeId.ROADMAP,
	            scrollwheel: false
	        };


	        
	        // init the map
	        function initMap() {
	            if (map === void 0) {
	                map = new google.maps.Map(element[0], mapOptions);
	            }
	            var busLines = [
              {lat: -23.432530, lng: -46.787073},
              {lat: -23.432481, lng: -46.787081},
              {lat: -23.431505, lng: -46.787190},
              {lat: -23.431351, lng: -46.787335},
              {lat: -23.430599, lng: -46.787356},
              {lat: -23.430460, lng: -46.787303},
              {lat: -23.430244, lng: -46.787213},
              {lat: -23.429974, lng: -46.787228},
              {lat: -23.428381, lng: -46.787421},
              {lat: -23.427252, lng: -46.787579},
              {lat: -23.426523, lng: -46.787700},
              {lat: -23.426094, lng: -46.787794},
              {lat: -23.425559, lng: -46.787964},
              {lat: -23.424805, lng: -46.788345},
              {lat: -23.424645, lng: -46.788451},
              {lat: -23.424407, lng: -46.788634},
              {lat: -23.424179, lng: -46.788830},
              {lat: -23.423966, lng: -46.789087},
              {lat: -23.423582, lng: -46.789729},
              {lat: -23.423772, lng: -46.789696},
              {lat: -23.423878, lng: -46.789703},
              {lat: -23.423941, lng: -46.789736},
              {lat: -23.424024, lng: -46.789880},
              {lat: -23.424062, lng: -46.790027},
              {lat: -23.424028, lng: -46.790443},
              {lat: -23.424013, lng: -46.790592},
              {lat: -23.423944, lng: -46.790670},
              {lat: -23.423783, lng: -46.790724},
              {lat: -23.423588, lng: -46.790676},
              {lat: -23.423408, lng: -46.790563},
              {lat: -23.423133, lng: -46.790021},
              {lat: -23.422885, lng: -46.789529},
              {lat: -23.422801, lng: -46.789389},
              {lat: -23.422658, lng: -46.789045},
              {lat: -23.422680, lng: -46.788922},
              {lat: -23.422723, lng: -46.788833},
              {lat: -23.422828, lng: -46.788836},
              {lat: -23.422978, lng: -46.788934},
              {lat: -23.423115, lng: -46.789118},
              {lat: -23.423135, lng: -46.789400},
              {lat: -23.422892, lng: -46.789788},
              {lat: -23.422731, lng: -46.790049},
              {lat: -23.422035, lng: -46.791454},
              {lat: -23.421958, lng: -46.791621},
              {lat: -23.421736, lng: -46.792342},
              {lat: -23.421545, lng: -46.792692},
              {lat: -23.421307, lng: -46.793163},
              {lat: -23.420066, lng: -46.795550},
              {lat: -23.419633, lng: -46.796240},
              {lat: -23.419187, lng: -46.796995},
              {lat: -23.418487, lng: -46.798005},
              {lat: -23.418054, lng: -46.798767},
              {lat: -23.417714, lng: -46.799501},
              {lat: -23.417528, lng: -46.800125},
              {lat: -23.416944, lng: -46.801468},
              {lat: -23.416621, lng: -46.801998},
              {lat: -23.415421, lng: -46.804132},
              {lat: -23.414854, lng: -46.805144},
              {lat: -23.414569, lng: -46.805620},
              {lat: -23.414291, lng: -46.806104},
              {lat: -23.413664, lng: -46.807117},
              {lat: -23.413127, lng: -46.807810},
              {lat: -23.412819, lng: -46.808216},
              {lat: -23.412312, lng: -46.808856},
              {lat: -23.411707, lng: -46.809765},
              {lat: -23.411280, lng: -46.810568},
              {lat: -23.410950, lng: -46.811352},
              {lat: -23.410684, lng: -46.812216},
              {lat: -23.410564, lng: -46.813015},
              {lat: -23.410497, lng: -46.813676},
              {lat: -23.410431, lng: -46.816828},
              {lat: -23.410355, lng: -46.817725},
              {lat: -23.410267, lng: -46.818165},
              {lat: -23.409997, lng: -46.818641},
              {lat: -23.409472, lng: -46.819730},
              {lat: -23.408874, lng: -46.820481},
              {lat: -23.408609, lng: -46.820686},
              {lat: -23.408513, lng: -46.820873},
              {lat: -23.409009, lng: -46.821331},
              {lat: -23.409235, lng: -46.821362},
              {lat: -23.409686, lng: -46.820488},
              {lat: -23.410235, lng: -46.819393},
              {lat: -23.410464, lng: -46.818665},
              {lat: -23.410464, lng: -46.818389},
              {lat: -23.410511, lng: -46.817924},
              {lat: -23.410557, lng: -46.816835},
              {lat: -23.410664, lng: -46.813574},
              {lat: -23.410730, lng: -46.812906},
              {lat: -23.410877, lng: -46.812195},
              {lat: -23.411090, lng: -46.811338},
              {lat: -23.411272, lng: -46.810913},
              {lat: -23.411434, lng: -46.810553},
              {lat: -23.411832, lng: -46.809822},
              {lat: -23.412464, lng: -46.808920},
              {lat: -23.413270, lng: -46.808064},
              {lat: -23.413333, lng: -46.808037},
              {lat: -23.413368, lng: -46.808028},
              {lat: -23.413406, lng: -46.808030},
              {lat: -23.413437, lng: -46.808036},
              {lat: -23.413471, lng: -46.808044},
              {lat: -23.413505, lng: -46.808063},
              {lat: -23.414508, lng: -46.806470},
              {lat: -23.416032, lng: -46.803725},
              {lat: -23.416121, lng: -46.803518},
              {lat: -23.416216, lng: -46.803363},
              {lat: -23.416324, lng: -46.803276},
              {lat: -23.416519, lng: -46.803165},
              {lat: -23.416715, lng: -46.803101},
              {lat: -23.416881, lng: -46.803073},
              {lat: -23.417005, lng: -46.803057},
              {lat: -23.417165, lng: -46.803068},
              {lat: -23.417709, lng: -46.803307},
              {lat: -23.418260, lng: -46.803585},
              {lat: -23.418525, lng: -46.803956},
              {lat: -23.418633, lng: -46.804121},
              {lat: -23.418695, lng: -46.804259},
              {lat: -23.418719, lng: -46.804407},
              {lat: -23.418741, lng: -46.804612},
              {lat: -23.418737, lng: -46.804885},
              {lat: -23.418732, lng: -46.805202},
              {lat: -23.418702, lng: -46.805828},
              {lat: -23.418604, lng: -46.806486},
              {lat: -23.418431, lng: -46.806962},
              {lat: -23.418296, lng: -46.807257},
              {lat: -23.418050, lng: -46.807646},
              {lat: -23.417754, lng: -46.807988},
              {lat: -23.417225, lng: -46.808646},
              {lat: -23.416375, lng: -46.809464},
              {lat: -23.415630, lng: -46.810115},
              {lat: -23.415141, lng: -46.809962},
              {lat: -23.414707, lng: -46.809494},
              {lat: -23.414313, lng: -46.808994},
              {lat: -23.413505, lng: -46.808063},
              {lat: -23.413465, lng: -46.808001},
              {lat: -23.413452, lng: -46.807969},
              {lat: -23.413445, lng: -46.807926},
              {lat: -23.413445, lng: -46.807888},
              {lat: -23.413467, lng: -46.807820},
              {lat: -23.413880, lng: -46.807199},
              {lat: -23.414436, lng: -46.806194},
              {lat: -23.415894, lng: -46.803570},
              {lat: -23.416711, lng: -46.802089},
              {lat: -23.417874, lng: -46.800888},
              {lat: -23.418141, lng: -46.800655},
              {lat: -23.418361, lng: -46.800488},
              {lat: -23.418680, lng: -46.800140},
              {lat: -23.419067, lng: -46.799581},
              {lat: -23.419320, lng: -46.799043},
              {lat: -23.419440, lng: -46.798673},
              {lat: -23.419447, lng: -46.798411},
              {lat: -23.419640, lng: -46.797489},
              {lat: -23.419940, lng: -46.796479},
              {lat: -23.420286, lng: -46.795644},
              {lat: -23.421573, lng: -46.792932},
              {lat: -23.421930, lng: -46.792247},
              {lat: -23.422456, lng: -46.791368},
              {lat: -23.423520, lng: -46.789512},
              {lat: -23.423590, lng: -46.789393},
              {lat: -23.424107, lng: -46.788659},
              {lat: -23.424462, lng: -46.788337},
              {lat: -23.424799, lng: -46.788127},
              {lat: -23.425460, lng: -46.787796},
              {lat: -23.426666, lng: -46.787466},
              {lat: -23.427513, lng: -46.787324},
              {lat: -23.428650, lng: -46.787226},
              {lat: -23.429569, lng: -46.787132},
              {lat: -23.429813, lng: -46.787087},
              {lat: -23.430268, lng: -46.787092},
              {lat: -23.430449, lng: -46.787092},
              {lat: -23.430542, lng: -46.787090},
              {lat: -23.430638, lng: -46.787090},
              {lat: -23.430824, lng: -46.787079},
              {lat: -23.432918, lng: -46.786709},
              {lat: -23.434709, lng: -46.786565},
              {lat: -23.435817, lng: -46.786375},
              {lat: -23.436012, lng: -46.786676},
              {lat: -23.434869, lng: -46.786897},
              {lat: -23.434131, lng: -46.786973},
              {lat: -23.433888, lng: -46.787004},
              {lat: -23.433700, lng: -46.786973},
              {lat: -23.433165, lng: -46.787011},
              {lat: -23.432738, lng: -46.787117},
              {lat: -23.432681, lng: -46.787047},
              {lat: -23.432530, lng: -46.787073}

          	];

          	var busLinePoints = new google.maps.Polyline({
              path: busLines,
              geodesic: true,
              strokeColor: '#FF0000',
              strokeOpacity: 2.0,
              strokeWeight: 4
          });

          	var image = 'https://raw.githubusercontent.com/mistoquente/buser-responsive-website/master/site/assets/images/icon-bus.png';
           var busMaker1 = new google.maps.Marker({
              position: {lng: -46.801338, lat: -23.4174378},
              map: map,
              icon: image
          });
          var busMaker2 = new google.maps.Marker({
              position: {lat: -23.434131, lng: -46.786973},
              map: map,
              icon: image
          });
          var busMaker3 = new google.maps.Marker({
              position: {lat: -23.410877, lng: -46.812195},
              map: map,
              icon: image
          });

          busLinePoints.setMap(map);
          zoomToObject(busLinePoints);

          function zoomToObject(obj) {
              var bounds = new google.maps.LatLngBounds();
              var points = obj.getPath().getArray();
              for (var n = 0; n < points.length; n++) {
                  bounds.extend(points[n]);
              }
              map.fitBounds(bounds);
          }
	        }    
	        
	        // place a marker
	        function setMarker(map, position, title, content) {
	            var marker;
	            var markerOptions = {
	                position: position,
	                map: map,
	                title: title,
	                icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
	            };

	            marker = new google.maps.Marker(markerOptions);
	            markers.push(marker); // add marker to array
	            
	            google.maps.event.addListener(marker, 'click', function () {
	                // close window if not undefined
	                if (infoWindow !== void 0) {
	                    infoWindow.close();
	                }
	                // create new window
	                var infoWindowOptions = {
	                    content: content
	                };
	                infoWindow = new google.maps.InfoWindow(infoWindowOptions);
	                infoWindow.open(map, marker);
	            });
	        }
	        
	        // show the map and place some markers
	        initMap();
	        
	        setMarker(map, new google.maps.LatLng(51.508515, -0.125487), 'London', 'Just some content');
	        setMarker(map, new google.maps.LatLng(52.370216, 4.895168), 'Amsterdam', 'More content');
	        setMarker(map, new google.maps.LatLng(48.856614, 2.352222), 'Paris', 'Text here');
	    };
	    
	    return {
	        restrict: 'A',
	        template: '<div id="gmaps"></div>',
	        replace: true,
	        link: link
	    };
	});



 })();