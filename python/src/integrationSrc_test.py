import unittest
from integrationSrc import add, subtract, multiply, divide, complex_math_calculation, complex_math_calculation1, complex_math_calculation2, complex_math_calculation3

class TestIntegration(unittest.TestCase):
    def test_add(self):
        result = add(2, 3)
        self.assertEqual(result, 5)

    def test_subtract(self):
        result = subtract(5, 3)
        self.assertEqual(result, 2)

    def test_multiply(self):
        result = multiply(2, 3)
        self.assertEqual(result, 6)

    def test_divide(self):
        result = divide(6, 3)
        self.assertEqual(result, 2)

    def test_divide_by_zero(self):
        with self.assertRaises(ValueError):
            divide(6, 0)

    def test_complex_math_calculation(self):
        result = complex_math_calculation(2, 3, 4, 5)
        self.assertEqual(result, -0.5)
        
    def test_complex_math_calculation1(self):
        result = complex_math_calculation1(2, 3, 4, 5)
        self.assertEqual(result, -0.5)
    
    def test_complex_math_calculation2(self):
        result = complex_math_calculation2(2, 3, 4, 5)
        self.assertEqual(result, -0.5)
        
    def test_complex_math_calculation3(self):
        result = complex_math_calculation3(2, 3, 4, 5)
        self.assertEqual(result, -0.5)

if __name__ == '__main__':
    unittest.main()


