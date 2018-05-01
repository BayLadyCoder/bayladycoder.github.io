$(document).ready(function() {
   
if (navigator.geolocation) {

  navigator.geolocation.getCurrentPosition(function(position) {
    
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var apiUrl = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;
  
  $.getJSON(apiUrl, function(json) {
    
    var condition = json.weather[0].main;
   
    switch(condition) {
      case "Rain":
        $(".condition").html("<i class=\"wi wi-rain\"></i>");
        break;
        
      case "Clear":
        $(".condition").html("<i class=\"wi wi-day-sunny\"></i>");
        break;
        
      case "Drizzle":
        $(".condition").html("<i class=\"wi wi-showers\"></i>");
        break;
          
      case "Clouds":
        $(".condition").html("<i class=\"wi wi-cloudy\"></i>");
        break;
          
      case "Snow":
        $(".condition").html("<i class=\"wi wi-snowflake-cold\"></i>");
        break;
          
      case "Thunderstrom":
        $(".condition").html("<i class=\"wi wi-thunderstorm\"></i>");
        break;
          
      case "Mist":
        $(".condition").html("<i class=\"wi \"></i>");
        break;
        
      default:
        $(".condition").html("<i class=\"wi wi-thermometer\"></i>");
    }
    
    var tempCel = Math.round(json.main.temp);
    var tempFah = Math.round((json.main.temp*(9/5)) + 32);
    var city = json.name;
    var country = json.sys.country;
    
    var location1 = "<p><strong>Your Location:</strong> " + city + ", " + country + "</p>";
    
    var location2 = "<p style=\"display: none\"><strong>Your Location:</strong> " + city + ", " + country + "</p>";
    
        var degreeCel = "<p>" + tempCel + " " + "<span>" + "ºC" + "</span></p>";
    
        var degreeFah = "<p style=\"display: none\">" + tempFah + " " + "<span>" + "ºF" + "</span></p>";
          
     $("#location").html(location1+location2);
     $("#currentWeather").html(degreeCel+degreeFah);
    
     $("span").on("click", function() {
     $("p").toggle();
     });

  });
  });
   
}
   
  });  