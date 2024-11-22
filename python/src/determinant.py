
def sub_matrix(matrix, i, j):
    matrix_size = len(matrix[0])
    if matrix_size == 1:
        return matrix[0][0]
    sub_matrix = []
    for x in range(matrix_size):
        if x == i:
            continue
        row = []
        for y in range(matrix_size):
            if y == j:
                continue
            row.append(matrix[x][y])
        sub_matrix.append(row)
    return sub_matrix

def is_matrix_square(matrix):
    num_rows = len(matrix)
    for row in matrix:
        if num_rows != len(row):
            return False
    return True

def determinant(matrix):
    if not isinstance(matrix, list) or len(matrix) == 0 or not isinstance(matrix[0], list):
        raise ValueError("Input is not a valid 2D matrix.")
    if not is_matrix_square(matrix):
        raise ValueError("Square matrix is required.")
    num_cols = len(matrix[0])
    if num_cols == 1:
        return matrix[0][0]
    result = 0
    set_index = 0
    for i in range(num_cols):
        result += ((-1) ** i) * matrix[set_index][i] * determinant(sub_matrix(matrix, set_index, i))
    return result