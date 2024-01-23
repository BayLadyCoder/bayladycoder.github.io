$(document).ready(function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`;
      const bdcApi = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;

      $.getJSON(bdcApi, function (json) {
        const city = json.city;
        const state = json.principalSubdivision;

        const location =
          '<p><strong>Your Location:</strong> ' + city + ', ' + state + '</p>';

        $('#location').html(location);
      });

      $.getJSON(weatherApiUrl, function (json) {
        // var condition = json.weather[0].main;

        // switch (condition) {
        //   case 'Rain':
        //     $('.condition').html('<i class="wi wi-rain"></i>');
        //     break;

        //   case 'Clear':
        //     $('.condition').html('<i class="wi wi-day-sunny"></i>');
        //     break;

        //   case 'Drizzle':
        //     $('.condition').html('<i class="wi wi-showers"></i>');
        //     break;

        //   case 'Clouds':
        //     $('.condition').html('<i class="wi wi-cloudy"></i>');
        //     break;

        //   case 'Snow':
        //     $('.condition').html('<i class="wi wi-snowflake-cold"></i>');
        //     break;

        //   case 'Thunderstrom':
        //     $('.condition').html('<i class="wi wi-thunderstorm"></i>');
        //     break;

        //   case 'Mist':
        //     $('.condition').html('<i class="wi "></i>');
        //     break;

        //   default:
        //     $('.condition').html('<i class="wi wi-thermometer"></i>');
        // }

        const tempCel = Math.round(json.current.temperature_2m);
        const tempFah = Math.round(tempCel * (9 / 5) + 32);

        const degreeCel =
          '<p class="temperature">' +
          tempCel +
          ' ' +
          '<span>' +
          'ºC' +
          '</span></p>';

        const degreeFah =
          '<p class="temperature" style="display: none">' +
          tempFah +
          ' ' +
          '<span>' +
          'ºF' +
          '</span></p>';

        $('#currentWeather').html(degreeCel + degreeFah);

        $('span').on('click', function () {
          $('.temperature').toggle();
        });
      });
    });
  }
});
