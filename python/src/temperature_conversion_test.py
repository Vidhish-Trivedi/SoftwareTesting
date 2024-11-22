import unittest
from temperature_conversion import TemperatureConversion

class TestTemperatureConversion(unittest.TestCase):
    def setUp(self):
        self.temp_conv = TemperatureConversion()

    def test_celsius_to_fahrenheit(self):
        self.assertEqual(self.temp_conv.celsius_to_fahrenheit(0), 32)
        self.assertEqual(self.temp_conv.celsius_to_fahrenheit(100), 212)

    def test_celsius_to_kelvin(self):
        self.assertEqual(self.temp_conv.celsius_to_kelvin(0), 273)
        self.assertEqual(self.temp_conv.celsius_to_kelvin(100), 373)

    def test_celsius_to_rankine(self):
        self.assertEqual(self.temp_conv.celsius_to_rankine(0), 492)
        self.assertEqual(self.temp_conv.celsius_to_rankine(100), 672)

    def test_fahrenheit_to_celsius(self):
        self.assertEqual(self.temp_conv.fahrenheit_to_celsius(32), 0)
        self.assertEqual(self.temp_conv.fahrenheit_to_celsius(212), 100)

    def test_fahrenheit_to_kelvin(self):
        self.assertEqual(self.temp_conv.fahrenheit_to_kelvin(32), 273)
        self.assertEqual(self.temp_conv.fahrenheit_to_kelvin(212), 373)

    def test_kelvin_to_celsius(self):
        self.assertEqual(self.temp_conv.kelvin_to_celsius(273), 0)
        self.assertEqual(self.temp_conv.kelvin_to_celsius(373), 100)

    def test_kelvin_to_fahrenheit(self):
        self.assertEqual(self.temp_conv.kelvin_to_fahrenheit(273), 32)
        self.assertEqual(self.temp_conv.kelvin_to_fahrenheit(373), 212)

if __name__ == '__main__':
    unittest.main()
