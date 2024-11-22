class TemperatureConversion {
  celsiusToFahrenheit = (celsius) => {
    return Math.round((celsius * 9) / 5 + 32);
  };

  celsiusToKelvin = (celsius) => {
    return Math.round(celsius + 273.15);
  };

  celsiusToRankine = (celsius) => {
    return Math.round((celsius * 9) / 5 + 491.67);
  };

  fahrenheitToCelsius = (fahrenheit) => {
    return Math.round(((fahrenheit - 32) * 5) / 9);
  };

  fahrenheitToKelvin = (fahrenheit) => {
    return Math.round(((fahrenheit - 32) * 5) / 9 + 273.15);
  };

  kelvinToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };

  kelvinToFahrenheit = (kelvin) => {
    return Math.round(((kelvin - 273.15) * 9) / 5 + 32);
  };
}

export default TemperatureConversion;
