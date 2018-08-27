'use strict';

window.onload = function(){
  var request = new XMLHttpRequest();
  // var api_key = '&APPID=635dd3ae1a7fae5cd94844223f8bd1ea';
  //Genera una nueva conexión, gracias a la petición GET que se hace al endpoint.
  request.open('GET','https://api.openweathermap.org/data/2.5/weather?id=3688685&APPID=635dd3ae1a7fae5cd94844223f8bd1ea',true);
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    var iconStr = data.weather[0].icon +'';

    if (request.status >= 200 && request.status < 400) {
      switch(iconStr){
        case '01d':
          document.getElementById('banner_container').style.backgroundColor='skyblue';
          document.getElementById('footer_js').style.backgroundColor='skyblue';
          break;
        case '02d':
          document.getElementById('banner_container').style.backgroundColor='skyblue';
          document.getElementById('footer_js').style.backgroundColor='skyblue';
        break;
        case '03d':
          document.getElementById('banner_container').style.backgroundColor='skyblue';
          document.getElementById('footer_js').style.backgroundColor='skyblue';
          break;
        case '04d':
          document.getElementById('banner_container').style.backgroundColor='#B0C4DE';
          document.getElementById('footer_js').style.backgroundColor='#B0C4DE';
        break;
        case '09d':
          document.getElementById('banner_container').style.backgroundColor='lightgrey';
          document.getElementById('footer_js').style.backgroundColor='lightgrey';
          break;
        case '10d':
          document.getElementById('banner_container').style.backgroundColor='lightgrey';
          document.getElementById('footer_js').style.backgroundColor='lightgrey';
        break;
        case '11d':
        document.getElementById('banner_container').style.backgroundColor='grey';
          document.getElementById('footer_js').style.backgroundColor='grey';
          break;
        case '13d':
          document.getElementById('banner_container').style.backgroundColor='white';
          document.getElementById('footer_js').style.backgroundColor='white';
        break;
        case '50d':
          document.getElementById('banner_container').style.backgroundColor='white';
          document.getElementById('footer_js').style.backgroundColor='white';
        break;
        case '01n':
          document.getElementById('banner_container').style.backgroundColor='MidnightBlue';
          document.getElementById('footer_js').style.backgroundColor='MidnightBlue';
          break;
        case '02n':
          document.getElementById('banner_container').style.backgroundColor='MidnightBlue';
          document.getElementById('footer_js').style.backgroundColor='MidnightBlue';
        break;
        case '03n':
          document.getElementById('banner_container').style.backgroundColor='MidnightBlue';
          document.getElementById('footer_js').style.backgroundColor='MidnightBlue';
          break;
        case '04n':
          document.getElementById('banner_container').style.backgroundColor='MidnightBlue';
          document.getElementById('footer_js').style.backgroundColor='MidnightBlue';
        break;
        case '09n':
          document.getElementById('banner_container').style.backgroundColor='MidnightBlue';
          document.getElementById('footer_js').style.backgroundColor='MidnightBlue';
          break;
        case '10n':
          document.getElementById('banner_container').style.backgroundColor='MidnightBlue';
          document.getElementById('footer_js').style.backgroundColor='MidnightBlue';
        break;
        case '11n':
          document.getElementById('banner_container').style.backgroundColor='MidnightBlue';
          document.getElementById('footer_js').style.backgroundColor='MidnightBlue';
          break;
        case '13n':
          document.getElementById('banner_container').style.backgroundColor='MidnightBlue';
          document.getElementById('footer_js').style.backgroundColor='MidnightBlue';
          break;
        case '50n':
          document.getElementById('banner_container').style.backgroundColor='MidnightBlue';
          document.getElementById('footer_js').style.backgroundColor='MidnightBlue';
          break;
      }
    }
    else{
      console.log('error');
    }
  }
  request.send();
}
