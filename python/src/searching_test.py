import unittest
from searching import Searching

class TestSearching(unittest.TestCase):
    def setUp(self):
        self.searching = Searching()

    def test_binary_search_found(self):
        array = [1, 2, 5, 5, 6, 9]
        index = self.searching.binary_search(array, 5)
        self.assertEqual(index, 2)

    def test_binary_search_not_found(self):
        array = [1, 2, 5, 5, 6, 9]
        index = self.searching.binary_search(array, 10)
        self.assertEqual(index, -1)

    def test_binary_search_first_element(self):
        array = [1, 2, 5, 5, 6, 9]
        index = self.searching.binary_search(array, 1)
        self.assertEqual(index, 0)

    def test_binary_search_last_element(self):
        array = [1, 2, 5, 5, 6, 9]
        index = self.searching.binary_search(array, 9)
        self.assertEqual(index, 5)

    def test_binary_search_empty_array(self):
        array = []
        index = self.searching.binary_search(array, 5)
        self.assertEqual(index, -1)

    def test_binary_search_one_element_found(self):
        array = [5]
        index = self.searching.binary_search(array, 5)
        self.assertEqual(index, 0)

    def test_binary_search_one_element_not_found(self):
        array = [1]
        index = self.searching.binary_search(array, 5)
        self.assertEqual(index, -1)

    def test_binary_search_duplicate_elements(self):
        array = [1, 2, 5, 5, 5, 6, 9]
        index = self.searching.binary_search(array, 5)
        self.assertIn(index, [2, 3, 4])

    def test_linear_search_found(self):
        array = [1, 2, 5, 5, 6, 9]
        index = self.searching.linear_search(array, 5)
        self.assertEqual(index, 2)

    def test_linear_search_not_found(self):
        array = [1, 2, 5, 5, 6, 9]
        index = self.searching.linear_search(array, 10)
        self.assertEqual(index, -1)

    def test_linear_search_first_element(self):
        array = [1, 2, 5, 5, 6, 9]
        index = self.searching.linear_search(array, 1)
        self.assertEqual(index, 0)

    def test_linear_search_last_element(self):
        array = [1, 2, 5, 5, 6, 9]
        index = self.searching.linear_search(array, 9)
        self.assertEqual(index, 5)

    def test_linear_search_empty_array(self):
        array = []
        index = self.searching.linear_search(array, 5)
        self.assertEqual(index, -1)

    def test_linear_search_one_element_found(self):
        array = [5]
        index = self.searching.linear_search(array, 5)
        self.assertEqual(index, 0)

    def test_linear_search_one_element_not_found(self):
        array = [1]
        index = self.searching.linear_search(array, 5)
        self.assertEqual(index, -1)

    def test_linear_search_duplicate_elements(self):
        array = [1, 2, 5, 5, 5, 6, 9]
        index = self.searching.linear_search(array, 5)
        self.assertEqual(index, 2)

if __name__ == '__main__':
    unittest.main()
