import unittest
from simpson_integration import integral_evaluation
import math

class TestSimpsonIntegration(unittest.TestCase):
    def test_N_not_integer(self):
        with self.assertRaises(TypeError):
            integral_evaluation(2.5, 0, 1, math.sin)

    # def test_a_or_b_not_number(self):
    #     with self.assertRaises(TypeError):
    #         integral_evaluation(2, float('nan'), 1, math.sin)
    #     with self.assertRaises(TypeError):
    #         integral_evaluation(2, 0, float('nan'), math.sin)

    def test_N_not_even(self):
        with self.assertRaises(TypeError):
            integral_evaluation(3, 0, 1, math.sin)

    def test_N_less_than_or_equal_zero(self):
        with self.assertRaises(ValueError):
            integral_evaluation(0, 0, 1, math.sin)
        with self.assertRaises(ValueError):
            integral_evaluation(-2, 0, 1, math.sin)

    def test_a_greater_than_b(self):
        with self.assertRaises(ValueError):
            integral_evaluation(2, 2, 1, math.sin)

    def test_a_equal_to_b(self):
        self.assertEqual(integral_evaluation(2, 1, 1, math.sin), 0)

    def test_integral_sin(self):
        result = integral_evaluation(100, 0, math.pi, math.sin)
        self.assertAlmostEqual(result, 2, places=2)

    def test_integral_x_squared(self):
        result = integral_evaluation(100, 0, 1, lambda x: x * x)
        self.assertAlmostEqual(result, 1 / 3, places=2)

    def test_result_is_nan(self):
        with self.assertRaises(ValueError):
            integral_evaluation(2, 0, 1, lambda x: math.log(x))

if __name__ == '__main__':
    unittest.main()
