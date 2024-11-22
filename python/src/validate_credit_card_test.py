import unittest
from validate_credit_card import validate_credit_card

class TestValidateCreditCard(unittest.TestCase):
    def test_valid_visa_card(self):
        valid_visa = '4111111111111111'
        self.assertTrue(validate_credit_card(valid_visa))

    def test_valid_mastercard(self):
        valid_mastercard = '5500000000000004'
        self.assertTrue(validate_credit_card(valid_mastercard))

    # def test_valid_amex_card(self):
    #     valid_amex = '371449635398431'
    #     self.assertTrue(validate_credit_card(valid_amex))

    def test_card_with_non_numerical_characters(self):
        invalid_card = '4111a11111111111'
        with self.assertRaises(TypeError) as context:
            validate_credit_card(invalid_card)
        self.assertEqual(str(context.exception), '4111a11111111111 is an invalid credit card number because it has nonnumerical characters.')

    def test_card_with_invalid_length(self):
        invalid_card = '41111111111'
        with self.assertRaises(ValueError) as context:
            validate_credit_card(invalid_card)
        self.assertEqual(str(context.exception), '41111111111 is an invalid credit card number because of its length.')

    def test_card_with_invalid_starting_digits(self):
        invalid_card = '9111111111111111'
        with self.assertRaises(ValueError) as context:
            validate_credit_card(invalid_card)
        self.assertEqual(str(context.exception), '9111111111111111 is an invalid credit card number because of its first two digits.')

    def test_card_that_fails_luhn_check(self):
        invalid_card = '4111111111111112'
        with self.assertRaises(ValueError) as context:
            validate_credit_card(invalid_card)
        self.assertEqual(str(context.exception), '4111111111111112 is an invalid credit card number because it fails the Luhn check.')

if __name__ == '__main__':
    unittest.main()