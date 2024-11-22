from unittest import TestCase
from add_src import mul

class CalculatorTest(TestCase):

    def test_mul(self):
        self.assertEqual(mul(2, 2), 4)