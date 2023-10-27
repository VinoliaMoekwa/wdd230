// windchill.js

function calculateWindChill(temperatureCelsius, windSpeed) {
    const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;
  
    if (temperatureCelsius <= 10) {
      if (windSpeed > 4.8) { 
        const windChillCelsius = 13.12 + 0.6215 * temperatureCelsius - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperatureCelsius * Math.pow(windSpeed, 0.16);
        const windChillFahrenheit = (windChillCelsius * 9/5) + 32;
        return windChillCelsius.toFixed(2) + "°C (" + windChillFahrenheit.toFixed(2) + "°F)";
      } else {
        return "N/A";
      }
    } else {

      return "N/A";
    }

    
  }
  
        
    
