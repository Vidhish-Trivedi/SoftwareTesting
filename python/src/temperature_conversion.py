class TemperatureConversion:
  def celsius_to_fahrenheit(self, celsius):
    return round((celsius * 9) / 5 + 32)

  def celsius_to_kelvin(self, celsius):
    return round(celsius + 273.15)

  def celsius_to_rankine(self, celsius):
    return round((celsius * 9) / 5 + 491.67)

  def fahrenheit_to_celsius(self, fahrenheit):
    return round(((fahrenheit - 32) * 5) / 9)

  def fahrenheit_to_kelvin(self, fahrenheit):
    return round(((fahrenheit - 32) * 5) / 9 + 273.15)

  def kelvin_to_celsius(self, kelvin):
    return round(kelvin - 273.15)

  def kelvin_to_fahrenheit(self, kelvin):
    return round(((kelvin - 273.15) * 9) / 5 + 32)