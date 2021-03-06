
$(function initializeMap () {

  const fullstackAcademy = new google.maps.LatLng(40.705086, -74.009151);

  const styleArr = [
    {
      featureType: 'landscape',
      stylers: [{ saturation: -100 }, { lightness: 60 }]
    },
    {
      featureType: 'road.local',
      stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: 'on' }]
    },
    {
      featureType: 'transit',
      stylers: [{ saturation: -100 }, { visibility: 'simplified' }]
    },
    {
      featureType: 'administrative.province',
      stylers: [{ visibility: 'off' }]
    },
    {
      featureType: 'water',
      stylers: [{ visibility: 'on' }, { lightness: 30 }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [{ color: '#ef8c25' }, { lightness: 40 }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ visibility: 'off' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [{ color: '#b6c54c' }, { lightness: 40 }, { saturation: -40 }]
    }
  ];

  const mapCanvas = document.getElementById('map-canvas');

  const currentMap = new google.maps.Map(mapCanvas, {
    center: fullstackAcademy,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styleArr
  });

  const iconURLs = {
    hotel: '/images/lodging_0star.png',
    restaurant: '/images/restaurant.png',
    activity: '/images/star-3.png'
  };

  function drawMarker (type, coords, category) {
    const latLng = new google.maps.LatLng(coords[0], coords[1]);
    const iconURL = iconURLs[type];
    const marker = new google.maps.Marker({
      icon: iconURL,
      position: latLng
    });
    marker.setMap(currentMap);
    marker.set("category",category);
    markers.push(marker);
  }

  // drawMarker('hotel', [40.705137, -74.007624]);
  // drawMarker('restaurant', [40.705137, -74.013940]);
  // drawMarker('activity', [40.716291, -73.995315]);




  hotels.forEach(function(elem){
    $("#hotel-choices").append("<option>"+elem.name+"</option>");
  });

  restaurants.forEach(function(elem){
    $("#restaurant-choices").append("<option>"+elem.name+"</option>");
  });

  activities.forEach(function(elem){
    $("#activity-choices").append("<option>"+elem.name+"</option>");
  });

  // $('#options-panel').on('click', 'button', function(event){
  //   //Find way to target specific button
  //   var selection = ($(event.target).attr("id"))
  //
  //   var selection = "#"+selection
  //   console.log($(selection).val())
  // })

var daysItinerary = [
  {},
  {},
  {}
];

  $("#hotel-button").on("click",function(event){
    var hotelz = $("#hotel-choices").val();
    var location;
    $(this).prop("disabled",true);
    hotels.forEach(function (elem) {
      if(elem.name === hotelz){
      location = elem['place'].location;
      }
    });
    $("#hotel-itinerary").text(hotelz);
    drawMarker('hotel', location, "day1Hotel");
  });

  $("#restaurant-button").on("click",function(){
    var restaurantz = $("#restaurant-choices").val();
    var location;

    $(this).prop("disabled",true);
    restaurants.forEach(function (elem) {
      if(elem.name === restaurantz){
      location = elem['place'].location;
      }
    });
    $("#restaurant-itinerary").text(restaurantz);
    drawMarker('restaurant', location, "day1Rest")

  });

  $("#activity-button").on("click",function(){
    var activitiez = $("#activity-choices").val();
    var location;

    $(this).prop("disabled",true);
    activities.forEach(function (elem) {
      if(elem.name === activitiez){
      location = elem['place'].location;
      }
    });
    $("#activity-itinerary").text(activitiez);
    drawMarker('activity', location, "day1Act");

  });

$(".day-buttons").on("click", function(event){
  var dayNum = ($(event.target).text());
  if(dayNum !== "+"){
    $("#day-title").text("Day " + dayNum);
  }
})

  var markers = [];
  function clearMarker(category){
    for(var i = 0; i < markers.length; i++){
      if(markers[i].get("category") == category){
        markers[i].setMap(null);
      }
    }
  }

  $("#itinerary").clone();

$("#hotel-rm").on("click",function(){
  $("#hotel-itinerary").text(" ");
  $("#hotel-button").prop("disabled",false);
  clearMarker("day1Hotel")
});

$("#restaurant-rm").on("click",function(){
  $("#restaurant-itinerary").text(" ");
  $("#restaurant-button").prop("disabled",false);
  clearMarker("day1Rest");
});

$("#activity-rm").on("click",function(){
  $("#activity-itinerary").text(" ");
  $("#activity-button").prop("disabled",false);
  clearMarker("day1Act")
});

});
