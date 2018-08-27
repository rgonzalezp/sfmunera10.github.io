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
          document.getElementById('grass_js').style.backgroundColor='SpringGreen';
          document.getElementById('upperroad_js').style.backgroundColor='grey';
          document.getElementById('lowerroad_js').style.backgroundColor='dimgrey';
          document.getElementById('menustuff1_js').style.backgroundColor='SpringGreen';
          document.getElementById('menustuff2_js').style.backgroundColor='SpringGreen';
          document.getElementById('menustuff3_js').style.backgroundColor='SpringGreen';
          document.getElementById('sky_js').style.backgroundColor='skyblue';
          document.getElementById('cloud1_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud2_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud3_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud4_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud5_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud6_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud7_js').src='./img/opacitysvg.svg';
          break;
        case '02d':
          document.getElementById('grass_js').style.backgroundColor='SpringGreen';
          document.getElementById('upperroad_js').style.backgroundColor='grey';
          document.getElementById('lowerroad_js').style.backgroundColor='dimgrey';
          document.getElementById('menustuff1_js').style.backgroundColor='SpringGreen';
          document.getElementById('menustuff2_js').style.backgroundColor='SpringGreen';
          document.getElementById('menustuff3_js').style.backgroundColor='SpringGreen';
          document.getElementById('sky_js').style.backgroundColor='skyblue';
          document.getElementById('cloud1_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud3_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud5_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud7_js').src='./img/opacitysvg.svg';
        break;
        case '03d':
          document.getElementById('grass_js').style.backgroundColor='MediumSeaGreen';
          document.getElementById('upperroad_js').style.backgroundColor='grey';
          document.getElementById('lowerroad_js').style.backgroundColor='dimgrey';
          document.getElementById('menustuff1_js').style.backgroundColor='MediumSeaGreen';
          document.getElementById('menustuff2_js').style.backgroundColor='MediumSeaGreen';
          document.getElementById('menustuff3_js').style.backgroundColor='MediumSeaGreen';
          document.getElementById('sky_js').style.backgroundColor='skyblue';
          document.getElementById('cloud1_js').src='./img/opacitysvg.svg';
          break;
        case '04d':
          document.getElementById('upperroad_js').style.backgroundColor='grey';
          document.getElementById('grass_js').style.backgroundColor='MediumSeaGreen';
          document.getElementById('lowerroad_js').style.backgroundColor='dimgrey';
          document.getElementById('menustuff1_js').style.backgroundColor='MediumSeaGreen';
          document.getElementById('menustuff2_js').style.backgroundColor='MediumSeaGreen';
          document.getElementById('menustuff3_js').style.backgroundColor='MediumSeaGreen';
          document.getElementById('sky_js').style.backgroundColor='#B0C4DE';
          document.getElementById('cloud1_js').src='./img/greycloudsvg.svg';
          document.getElementById('cloud2_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud3_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud4_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud5_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud6_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud7_js').src='./img/opacitysvg.svg';
        break;
        case '09d':
          document.getElementById('grass_js').style.backgroundColor='SeaGreen';
          document.getElementById('upperroad_js').style.backgroundColor='grey';
          document.getElementById('lowerroad_js').style.backgroundColor='dimgrey';
          document.getElementById('menustuff1_js').style.backgroundColor='SeaGreen';
          document.getElementById('menustuff2_js').style.backgroundColor='SeaGreen';
          document.getElementById('menustuff3_js').style.backgroundColor='SeaGreen';
          document.getElementById('sky_js').style.backgroundColor='lightgrey';
          document.getElementById('cloud1_js').src='./img/greycloudsvg.svg';
          document.getElementById('cloud2_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud3_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud4_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud5_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud6_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud7_js').src='./img/opacitysvg.svg';
          break;
        case '10d':
          document.getElementById('grass_js').style.backgroundColor='SeaGreen';
          document.getElementById('upperroad_js').style.backgroundColor='grey';
          document.getElementById('lowerroad_js').style.backgroundColor='dimgrey';
          document.getElementById('menustuff1_js').style.backgroundColor='SeaGreen';
          document.getElementById('menustuff2_js').style.backgroundColor='SeaGreen';
          document.getElementById('menustuff3_js').style.backgroundColor='SeaGreen';
          document.getElementById('sky_js').style.backgroundColor='lightgrey';
          document.getElementById('cloud1_js').src='./img/greycloudsvg.svg';
          document.getElementById('cloud2_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud3_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud4_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud5_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud6_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud7_js').src='./img/opacitysvg.svg';
        break;
        case '11d':
          document.getElementById('grass_js').style.backgroundColor='SeaGreen';
          document.getElementById('upperroad_js').style.backgroundColor='grey';
          document.getElementById('lowerroad_js').style.backgroundColor='dimgrey';
          document.getElementById('menustuff1_js').style.backgroundColor='SeaGreen';
          document.getElementById('menustuff2_js').style.backgroundColor='SeaGreen';
          document.getElementById('menustuff3_js').style.backgroundColor='SeaGreen';
          document.getElementById('sky_js').style.backgroundColor='grey';
          document.getElementById('cloud1_js').src='./img/greycloudsvg.svg';
          document.getElementById('cloud2_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud3_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud4_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud5_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud6_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud7_js').src='./img/opacitysvg.svg';
          break;
        case '13d':
          document.getElementById('grass_js').style.backgroundColor='white';
          document.getElementById('upperroad_js').style.backgroundColor='grey';
          document.getElementById('lowerroad_js').style.backgroundColor='dimgrey';
          document.getElementById('menustuff1_js').style.backgroundColor='lightgrey';
          document.getElementById('menustuff2_js').style.backgroundColor='lightgrey';
          document.getElementById('menustuff3_js').style.backgroundColor='lightgrey';
          document.getElementById('sky_js').style.backgroundColor='white';
          document.getElementById('cloud1_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud2_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud3_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud4_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud5_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud6_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud7_js').src='./img/opacitysvg.svg';
        break;
        case '50d':
          document.getElementById('grass_js').style.backgroundColor='MediumSeaGreen';
          document.getElementById('upperroad_js').style.backgroundColor='grey';
          document.getElementById('lowerroad_js').style.backgroundColor='dimgrey';
          document.getElementById('sky_js').style.backgroundColor='white';
          document.getElementById('cloud1_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud2_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud3_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud4_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud5_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud6_js').src='./img/opacitysvg.svg';
          document.getElementById('cloud7_js').src='./img/opacitysvg.svg';
          break;
          case '01n':
            document.getElementById('grass_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('upperroad_js').style.backgroundColor='#333333';
            document.getElementById('lowerroad_js').style.backgroundColor='#292929';
            document.getElementById('menustuff1_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('menustuff2_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('menustuff3_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('sky_js').style.backgroundColor='MidnightBlue';
            document.getElementById('cloud1_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud2_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud3_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud4_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud5_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud6_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud7_js').src='./img/opacitysvg.svg';
            break;
          case '02n':
            document.getElementById('grass_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('upperroad_js').style.backgroundColor='#333333';
            document.getElementById('lowerroad_js').style.backgroundColor='#292929';
            document.getElementById('menustuff1_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('menustuff2_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('menustuff3_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('sky_js').style.backgroundColor='MidnightBlue';
            document.getElementById('cloud1_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud2_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud3_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud4_js').src='./img/darkcloudsvg.svg';
            document.getElementById('cloud5_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud6_js').src='./img/darkcloudsvg.svg';
            document.getElementById('cloud7_js').src='./img/opacitysvg.svg';
          break;
          case '03n':
            document.getElementById('grass_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('upperroad_js').style.backgroundColor='#333333';
            document.getElementById('lowerroad_js').style.backgroundColor='#292929';
            document.getElementById('menustuff1_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('menustuff2_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('menustuff3_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('sky_js').style.backgroundColor='MidnightBlue';
            document.getElementById('cloud1_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud2_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud3_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud4_js').src='./img/darkcloudsvg.svg';
            document.getElementById('cloud5_js').src='./img/darkcloudsvg.svg';
            document.getElementById('cloud6_js').src='./img/darkcloudsvg.svg';
            document.getElementById('cloud7_js').src='./img/opacitysvg.svg';
            break;
          case '04n':
            document.getElementById('grass_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('upperroad_js').style.backgroundColor='#333333';
            document.getElementById('lowerroad_js').style.backgroundColor='#292929';
            document.getElementById('menustuff1_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('menustuff2_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('menustuff3_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('sky_js').style.backgroundColor='MidnightBlue';
            document.getElementById('cloud1_js').src='./img/bigdarkcloudsvg.svg';
            document.getElementById('cloud2_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud3_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud4_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud5_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud6_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud7_js').src='./img/opacitysvg.svg';
          break;
          case '09n':
            document.getElementById('grass_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('upperroad_js').style.backgroundColor='#333333';
            document.getElementById('lowerroad_js').style.backgroundColor='#292929';
            document.getElementById('menustuff1_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('menustuff2_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('menustuff3_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('sky_js').style.backgroundColor='MidnightBlue';
            document.getElementById('cloud1_js').src='./img/bigdarkcloudsvg.svg';
            document.getElementById('cloud2_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud3_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud4_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud5_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud6_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud7_js').src='./img/opacitysvg.svg';
            break;
          case '10n':
            document.getElementById('grass_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('upperroad_js').style.backgroundColor='#333333';
            document.getElementById('lowerroad_js').style.backgroundColor='#292929';
            document.getElementById('menustuff1_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('menustuff2_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('menustuff3_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('sky_js').style.backgroundColor='MidnightBlue';
            document.getElementById('cloud1_js').src='./img/bigdarkcloudsvg.svg';
            document.getElementById('cloud2_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud3_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud4_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud5_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud6_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud7_js').src='./img/opacitysvg.svg';
          break;
          case '11n':
            document.getElementById('grass_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('upperroad_js').style.backgroundColor='#333333';
            document.getElementById('lowerroad_js').style.backgroundColor='#292929';
            document.getElementById('menustuff1_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('menustuff2_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('menustuff3_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('sky_js').style.backgroundColor='MidnightBlue';
            document.getElementById('cloud1_js').src='./img/bigdarkcloudsvg.svg';
            document.getElementById('cloud2_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud3_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud4_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud5_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud6_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud7_js').src='./img/opacitysvg.svg';
            break;
          case '13n':
            document.getElementById('grass_js').style.backgroundColor='lightgrey';
            document.getElementById('upperroad_js').style.backgroundColor='#333333';
            document.getElementById('lowerroad_js').style.backgroundColor='#292929';
            document.getElementById('menustuff1_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('menustuff2_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('menustuff3_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('sky_js').style.backgroundColor='MidnightBlue';
            document.getElementById('cloud1_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud2_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud3_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud4_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud5_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud6_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud7_js').src='./img/opacitysvg.svg';
          break;
          case '50n':
            document.getElementById('grass_js').style.backgroundColor='grey';
            document.getElementById('upperroad_js').style.backgroundColor='#333333';
            document.getElementById('lowerroad_js').style.backgroundColor='#292929';
            document.getElementById('menustuff1_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('menustuff2_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('menustuff3_js').style.backgroundColor='DarkSlateGray';
            document.getElementById('sky_js').style.backgroundColor='MidnightBlue';
            document.getElementById('cloud1_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud2_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud3_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud4_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud5_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud6_js').src='./img/opacitysvg.svg';
            document.getElementById('cloud7_js').src='./img/opacitysvg.svg';
            break;
      }
    }
    else{
      console.log('error');
    }
  }
  request.send();
}
