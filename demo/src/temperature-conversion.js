class TemperatureConversion {
  celsiusToFahrenheit = (celsius) => {
    // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
    // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
    return Math.round((celsius * 9) / 5 + 32);
  };

  celsiusToKelvin = (celsius) => {
    // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
    // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
    return Math.round(celsius + 273.15);
  };

  celsiusToRankine = (celsius) => {
    // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
    // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
    return Math.round((celsius * 9) / 5 + 491.67);
  };

  fahrenheitToCelsius = (fahrenheit) => {
    // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
    // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
    return Math.round(((fahrenheit - 32) * 5) / 9);
  };

  fahrenheitToKelvin = (fahrenheit) => {
    // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
    // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
    return Math.round(((fahrenheit - 32) * 5) / 9 + 273.15);
  };

  kelvinToCelsius = (kelvin) => {
    // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
    // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
    return Math.round(kelvin - 273.15);
  };

  kelvinToFahrenheit = (kelvin) => {
    // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
    // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
    return Math.round(((kelvin - 273.15) * 9) / 5 + 32);
  };
}

export default TemperatureConversion;
