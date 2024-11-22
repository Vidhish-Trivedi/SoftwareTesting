def integral_evaluation(N, a, b, func):
    # Check if N is an even integer
    if not isinstance(N, int) or N % 2 != 0:
        raise TypeError('N must be an even integer')
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        raise TypeError('a and b must be numbers')
    if N <= 0:
        raise ValueError('N has to be >= 2')
    if a > b:
        raise ValueError('a must be less or equal than b')
    if a == b:
        return 0

    # Calculate the step h
    h = (b - a) / N

    # Find interpolation points
    xi = a  # initialize xi = x0
    points_array = []

    # Find the sum {f(x0) + 4*f(x1) + 2*f(x2) + ... + 2*f(xN-2) + 4*f(xN-1) + f(xN)}
    for i in range(N + 1):
        if i == 0 or i == N:
            temp = func(xi)
        elif i % 2 == 0:
            temp = 2 * func(xi)
        else:
            temp = 4 * func(xi)
        points_array.append(temp)
        xi += h

    # Calculate the integral
    result = h / 3 * sum(points_array)

    if result != result:  # Check for NaN
        raise ValueError("Result is NaN. The input interval doesn't belong to the function's domain")

    return result