import unittest
from sorting import Sorting

class TestSorting(unittest.TestCase):
    def setUp(self):
        self.sorting = Sorting()

    def test_bubble_sort(self):
        array = [5, 2, 9, 1, 5, 6]
        sorted_array = self.sorting.bubble_sort(array)
        self.assertEqual(sorted_array, [1, 2, 5, 5, 6, 9])

    def test_bubble_sort_already_sorted(self):
        array = [1, 2, 3, 4, 5]
        sorted_array = self.sorting.bubble_sort(array)
        self.assertEqual(sorted_array, [1, 2, 3, 4, 5])

    def test_bubble_sort_reverse_sorted(self):
        array = [5, 4, 3, 2, 1]
        sorted_array = self.sorting.bubble_sort(array)
        self.assertEqual(sorted_array, [1, 2, 3, 4, 5])

    def test_bubble_sort_identical_elements(self):
        array = [5, 5, 5, 5, 5]
        sorted_array = self.sorting.bubble_sort(array)
        self.assertEqual(sorted_array, [5, 5, 5, 5, 5])

    def test_bubble_sort_empty_array(self):
        array = []
        sorted_array = self.sorting.bubble_sort(array)
        self.assertEqual(sorted_array, [])

    def test_bubble_sort_single_element(self):
        array = [1]
        sorted_array = self.sorting.bubble_sort(array)
        self.assertEqual(sorted_array, [1])

    def test_bubble_sort_negative_numbers(self):
        array = [3, -2, -1, 0, 2, 1]
        sorted_array = self.sorting.bubble_sort(array)
        self.assertEqual(sorted_array, [-2, -1, 0, 1, 2, 3])

    def test_second_largest_element(self):
        array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
        second_largest = self.sorting.second_largest_element(array)
        self.assertEqual(second_largest, 6)

    def test_second_largest_element_with_duplicates(self):
        array = [1, 2, 2, 3, 3, 4, 4, 5, 5]
        second_largest = self.sorting.second_largest_element(array)
        self.assertEqual(second_largest, 4)

    def test_second_largest_element_with_negative_numbers(self):
        array = [-10, -20, -30, -40, -50]
        second_largest = self.sorting.second_largest_element(array)
        self.assertEqual(second_largest, -20)

    def test_second_largest_element_single_element(self):
        array = [1]
        second_largest = self.sorting.second_largest_element(array)
        self.assertEqual(second_largest, -float('inf'))

    # def test_second_largest_element_empty_array(self):
    #     array = []
    #     second_largest = self.sorting.second_largest_element(array)
    #     self.assertEqual(second_largest, -float('inf'))

if __name__ == '__main__':
    unittest.main()