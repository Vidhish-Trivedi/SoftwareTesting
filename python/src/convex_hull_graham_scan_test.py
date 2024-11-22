import unittest
from convex_hull_graham_scan import convex_hull

class TestConvexHull(unittest.TestCase):

    def test_less_than_3_points(self):
        points = [
            {'x': 0, 'y': 0},
            {'x': 1, 'y': 1}
        ]
        with self.assertRaises(ValueError) as context:
            convex_hull(points)
        self.assertEqual(str(context.exception), 'Minimum of 3 points is required to form closed polygon!')

    def test_correct_convex_hull(self):
        points = [
            {'x': 0, 'y': 3},
            {'x': 1, 'y': 1},
            {'x': 2, 'y': 2},
            {'x': 4, 'y': 4},
            {'x': 0, 'y': 0},
            {'x': 1, 'y': 2},
            {'x': 3, 'y': 1},
            {'x': 3, 'y': 3}
        ]
        expected_hull = [{'x': 0, 'y': 3}, {'x': 4, 'y': 4}, {'x': 3, 'y': 1}, {'x': 0, 'y': 0}]
        hull = convex_hull(points)
        self.assertEqual(hull, expected_hull)

    def test_collinear_points(self):
        points = [
            {'x': 0, 'y': 0},
            {'x': 1, 'y': 1},
            {'x': 2, 'y': 2},
            {'x': 3, 'y': 3}
        ]
        expected_hull = [
            {'x': 1, 'y': 1},
            {'x': 2, 'y': 2},
            {'x': 3, 'y': 3},
            {'x': 2, 'y': 2},
            {'x': 1, 'y': 1},
            {'x': 0, 'y': 0}
        ]
        hull = convex_hull(points)
        self.assertEqual(hull, expected_hull)

    def test_points_forming_triangle(self):
        points = [
            {'x': 0, 'y': 0},
            {'x': 1, 'y': 1},
            {'x': 2, 'y': 0}
        ]
        expected_hull = [{'x': 1, 'y': 1}, {'x': 2, 'y': 0}, {'x': 0, 'y': 0}]
        hull = convex_hull(points)
        self.assertEqual(hull, expected_hull)

    def test_points_forming_square(self):
        points = [
            {'x': 0, 'y': 0},
            {'x': 0, 'y': 1},
            {'x': 1, 'y': 0},
            {'x': 1, 'y': 1}
        ]
        expected_hull = [{'x': 0, 'y': 1}, {'x': 1, 'y': 1}, {'x': 1, 'y': 0}, {'x': 0, 'y': 0}]
        hull = convex_hull(points)
        self.assertEqual(hull, expected_hull)

if __name__ == '__main__':
    unittest.main()