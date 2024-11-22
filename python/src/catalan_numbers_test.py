import unittest
from catalan_numbers import catalan_numbers

class TestCatalanNumbers(unittest.TestCase):

    def test_n_0(self):
        result = catalan_numbers(0)
        self.assertEqual(result, [1])

    def test_n_1(self):
        result = catalan_numbers(1)
        self.assertEqual(result, [1, 1])

    def test_n_2(self):
        result = catalan_numbers(2)
        self.assertEqual(result, [1, 1, 2])

    def test_n_3(self):
        result = catalan_numbers(3)
        self.assertEqual(result, [1, 1, 2, 5])

    def test_n_4(self):
        result = catalan_numbers(4)
        self.assertEqual(result, [1, 1, 2, 5, 14])

    def test_n_5(self):
        result = catalan_numbers(5)
        self.assertEqual(result, [1, 1, 2, 5, 14, 42])

    def test_n_6(self):
        result = catalan_numbers(6)
        self.assertEqual(result, [1, 1, 2, 5, 14, 42, 132])

    def test_n_7(self):
        result = catalan_numbers(7)
        self.assertEqual(result, [1, 1, 2, 5, 14, 42, 132, 429])

    def test_n_8(self):
        result = catalan_numbers(8)
        self.assertEqual(result, [1, 1, 2, 5, 14, 42, 132, 429, 1430])

    def test_n_9(self):
        result = catalan_numbers(9)
        self.assertEqual(result, [1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862])

    def test_n_10(self):
        result = catalan_numbers(10)
        self.assertEqual(result, [1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796])

if __name__ == '__main__':
    unittest.main()