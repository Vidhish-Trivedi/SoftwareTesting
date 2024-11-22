import unittest
from determinant import determinant

class TestDeterminant(unittest.TestCase):
    # before each test define the matrix

    def test_1x1_matrix(self):
        matrix = [
            [5]
        ]
        self.assertEqual(determinant(matrix), 5)

    def test_2x2_matrix(self):
        matrix = [
            [1, 2],
            [3, 4]
        ]
        self.assertEqual(determinant(matrix), -2)

    def test_3x3_matrix(self):
        matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]
        self.assertEqual(determinant(matrix), 0)

    def test_4x4_matrix(self):
        matrix = [
            [1, 0, 2, -1],
            [3, 0, 0, 5],
            [2, 1, 4, -3],
            [1, 0, 5, 0]
        ]
        self.assertEqual(determinant(matrix), 30)

if __name__ == '__main__':
    unittest.main()