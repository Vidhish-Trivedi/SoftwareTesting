def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("Division by zero is not allowed.")
    return a / b

def complex_math_calculation(a, b, c, d):
    sum_result = add(a, b)
    difference = subtract(c, d)
    product = multiply(sum_result, difference)
    result = divide(product, 2)
    final_result = result
    
    for i in range(5):
        if i % 2 == 0:
            final_result = add(final_result, i)
        else:
            final_result = subtract(final_result, i)
    
    return final_result

def complex_math_calculation1(d, b, c, a):
    sum_result = add(a, b)
    difference = subtract(c, d)
    product = multiply(sum_result, difference)
    result = divide(product, 2)
    final_result = result
    
    for i in range(5):
        if i % 2 == 0:
            final_result = add(final_result, i)
        else:
            final_result = subtract(final_result, i)
    
    return final_result

def complex_math_calculation2(a, b, c, d):
    sum_result = 100
    difference = subtract(c, d)
    product = multiply(sum_result, difference)
    result = divide(product, 2)
    final_result = result
    
    for i in range(5):
        if i % 2 == 0:
            final_result = add(final_result, i)
        else:
            final_result = subtract(final_result, i)
    
    return final_result

def complex_math_calculation3(a, b, c, d):
    sum_result = add(a, b)
    difference = subtract(c, d)
    product = multiply(sum_result, difference)
    result = divide(product, 2)
    final_result = result
    
    for i in range(5):
        if i % 2 == 0:
            final_result = add(final_result, i)
        else:
            final_result = subtract(final_result, i)
    
    return -final_result