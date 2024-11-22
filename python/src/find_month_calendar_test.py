import unittest
from find_month_calendar import parse_date, is_leap_year, get_day_diff, is_greater 

class TestMonthCalendar(unittest.TestCase):

    def test_parse_date_correctly(self):
        date = '12/2021'
        parsed_date = parse_date(date)
        self.assertEqual(parsed_date, {'month': 12, 'year': 2021})
        
    def test_identify_leap_years_correctly(self):
        self.assertFalse(is_leap_year(1900))
        self.assertTrue(is_leap_year(2000))
        self.assertTrue(is_leap_year(2020))

    def test_calculate_day_difference_correctly(self):
        start_date = {'month': 1, 'year': 1900}
        end_date = {'month': 1, 'year': 1901}
        diff = get_day_diff(start_date, end_date)
        self.assertEqual(diff, 365)

    def test_identify_start_date_greater_than_end_date(self):
        start_date = {'month': 12, 'year': 2021}
        end_date = {'month': 1, 'year': 2021}
        result = is_greater(start_date, end_date)
        self.assertTrue(result)

    def test_identify_start_date_not_greater_than_end_date(self):
        start_date = {'month': 1, 'year': 2021}
        end_date = {'month': 12, 'year': 2021}
        result = is_greater(start_date, end_date)
        self.assertFalse(result)

if __name__ == '__main__':
    unittest.main()