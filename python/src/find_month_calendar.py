DAYS = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su']
BDAYS = ['M', 'Su', 'S', 'F', 'Th', 'W', 'T']
EPOCH = {'month': 1, 'year': 1900}
MONTH_DAYS = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
MONTH_DAYS_LEAP = [31, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

def is_leap_year(year):
    return year % 400 == 0 or (year % 100 != 0 and year % 4 == 0)

def print_cal(days, start_day, output=print):
    output('M   T   W   Th  F   S   Su')
    dates = list(range(1, days + 1))
    for _ in range(DAYS.index(start_day)):
        dates.insert(0, ' ')
    while dates:
        row = ''
        for _ in range(7):
            if dates:
                row += str(dates.pop(0))
                while len(row) % 4 != 0:
                    row += ' '
        output(row)

def parse_date(date):
    date_ar = list(map(int, date.split('/')))
    if len(date_ar) != 2:
        raise ValueError('Improper string encoding')
    return {'month': date_ar[0], 'year': date_ar[1]}

def is_greater(start_date, end_date):
    if start_date['year'] > end_date['year']:
        return True
    elif start_date['year'] < end_date['year']:
        return False
    elif start_date['month'] > end_date['month']:
        return True
    elif start_date['month'] < end_date['month']:
        return False
    return True

def get_day_diff(start_date, end_date):
    if is_greater(start_date, end_date) is None:
        return 0
    elif is_greater(start_date, end_date):
        start_date, end_date = end_date, start_date
    diff = 0
    while start_date['year'] != end_date['year']:
        diff += 366 if is_leap_year(start_date['year']) else 365
        start_date['year'] += 1
    while start_date['month'] != end_date['month']:
        if start_date['month'] < end_date['month']:
            diff += MONTH_DAYS_LEAP[start_date['month']] if is_leap_year(start_date['year']) else MONTH_DAYS[start_date['month']]
            start_date['month'] += 1
        else:
            diff -= MONTH_DAYS_LEAP[start_date['month'] - 1] if is_leap_year(start_date['year']) else MONTH_DAYS[start_date['month'] - 1]
            start_date['month'] -= 1
    return diff

def generate_month_cal(date):
    month = parse_date(date)
    difference = get_day_diff(EPOCH.copy(), month.copy()) % 7
    day = DAYS[difference] if is_greater(month.copy(), EPOCH.copy()) else BDAYS[difference]
    if is_leap_year(month['year']):
        print_cal(MONTH_DAYS_LEAP[month['month']], day)
    else:
        print_cal(MONTH_DAYS[month['month']], day)
