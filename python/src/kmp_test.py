import unittest
from kmp import KMP

class TestKMP(unittest.TestCase):
    def setUp(self):
        self.kmp = KMP()

    def test_computeLPS(self):
        pattern = "ABABCABAB"
        expectedLPS = [0, 0, 1, 2, 0, 1, 2, 3, 4]
        self.assertEqual(self.kmp.computeLPS(pattern), expectedLPS)

        pattern = "ABCDE"
        expectedLPS = [0, 0, 0, 0, 0]
        self.assertEqual(self.kmp.computeLPS(pattern), expectedLPS)

    def test_KMPSearch(self):
        text = "ABABDABACDABABCABAB"
        pattern = "ABABCABAB"
        expectedIndices = [10]
        self.assertEqual(self.kmp.KMPSearch(text, pattern), expectedIndices)

        text = "ABABDABACDABABCABAB"
        pattern = "XYZ"
        expectedIndices = []
        self.assertEqual(self.kmp.KMPSearch(text, pattern), expectedIndices)

        text = ""
        pattern = "ABABCABAB"
        expectedIndices = []
        self.assertEqual(self.kmp.KMPSearch(text, pattern), expectedIndices)

        text = "ABABDABACDABABCABAB"
        pattern = ""
        expectedIndices = []
        self.assertEqual(self.kmp.KMPSearch(text, pattern), expectedIndices)

if __name__ == '__main__':
    unittest.main()

