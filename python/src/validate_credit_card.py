def luhn_validation(credit_card_number):
    validation_sum = 0
    for index, digit in enumerate(credit_card_number):
        current_digit = int(digit)
        if index % 2 == 0:
            current_digit *= 2
            if current_digit > 9:
                current_digit %= 10
                current_digit += 1
        validation_sum += current_digit
    return validation_sum % 10 == 0

def validate_credit_card(credit_card_string):
    valid_start_sub_string = ['4', '5', '6', '37', '34', '35']

    if not isinstance(credit_card_string, str):
        raise TypeError('The given value is not a string')

    error_message = f"{credit_card_string} is an invalid credit card number because "
    if not credit_card_string.isdigit():
        raise TypeError(error_message + 'it has nonnumerical characters.')
    credit_card_string_length = len(credit_card_string)
    if not (13 <= credit_card_string_length <= 16):
        raise ValueError(error_message + 'of its length.')
    if not any(credit_card_string.startswith(sub_string) for sub_string in valid_start_sub_string):
        raise ValueError(error_message + 'of its first two digits.')
    if not luhn_validation(credit_card_string):
        raise ValueError(error_message + 'it fails the Luhn check.')

    return True