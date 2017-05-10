
hotels.forEach(function(elem){
  $("#hotel-choices").append("<option>"+elem.name+"</option>")
})

restaurants.forEach(function(elem){
  $("#restaurant-choices").append("<option>"+elem.name+"</option>")
})

activities.forEach(function(elem){
  $("#activity-choices").append("<option>"+elem.name+"</option>")
})

// $('#options-panel').on('click', 'button', function(event){
//   //Find way to target specific button
//   var selection = ($(event.target).attr("id"))
//
//   var selection = "#"+selection
//   console.log($(selection).val())
// })
$("#hotel-button").on("click",function(){
  var hotels = $("#hotel-choices").val();
  $(this).prop("disabled",true);
  console.log(drawMarker)
  $("#hotel-itinerary").text(hotels);
})

$("#restaurant-button").on("click",function(){
  var restaurants = $("#restaurant-choices").val();
  $(this).prop("disabled",true);
  $("#restaurant-itinerary").text(restaurants);

})

$("#activity-button").on("click",function(){
  var activities = $("#activity-choices").val();
  $(this).prop("disabled",true);
  $("#activity-itinerary").text(activities);

})
