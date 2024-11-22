import unittest
from number_of_islands import Islands

class TestIslands(unittest.TestCase):
    def setUp(self):
        self.islands = Islands()

    def test_empty_grid(self):
        grid = []
        result = self.islands.islands(grid)
        self.assertEqual(result, 0)

    def test_no_islands(self):
        grid = [
            ["0", "0", "0"],
            ["0", "0", "0"],
            ["0", "0", "0"]
        ]
        result = self.islands.islands(grid)
        self.assertEqual(result, 0)

    def test_one_island(self):
        grid = [
            ["1", "1", "0"],
            ["0", "1", "0"],
            ["0", "0", "0"]
        ]
        result = self.islands.islands(grid)
        self.assertEqual(result, 1)

    def test_four_islands(self):
        grid = [
            ["1", "0", "0", "1"],
            ["0", "0", "0", "0"],
            ["0", "1", "0", "1"]
        ]
        result = self.islands.islands(grid)
        self.assertEqual(result, 4)

    def test_one_large_island(self):
        grid = [
            ["1", "1", "1", "1"],
            ["1", "1", "1", "1"],
            ["1", "1", "1", "1"]
        ]
        result = self.islands.islands(grid)
        self.assertEqual(result, 1)

if __name__ == '__main__':
    unittest.main()

