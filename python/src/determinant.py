class Determinant {
  subMatrix = (matrix, i, j) => {
    let matrixSize = matrix[0].length;
    if (matrixSize === 1) {
      return matrix[0][0];
    }
    let subMatrix = [];
    for (let x = 0; x < matrixSize; x++) {
      if (x === i) {
        continue;
      }
      subMatrix.push([]);
      for (let y = 0; y < matrixSize; y++) {
        if (y === j) {
          continue;
        }
        subMatrix[subMatrix.length - 1].push(matrix[x][y]);
      }
    }
    return subMatrix;
  };

  isMatrixSquare = (matrix) => {
    let numRows = matrix.length;
    for (let i = 0; i < numRows; i++) {
      if (numRows !== matrix[i].length) {
        return false;
      }
    }
    return true;
  };

  determinant = (matrix) => {
    if (
      !Array.isArray(matrix) ||
      matrix.length === 0 ||
      !Array.isArray(matrix[0])
    ) {
      throw new Error("Input is not a valid 2D matrix.");
    }
    if (!(this.isMatrixSquare(matrix))) {
      throw new Error("Square matrix is required.");
    }
    let numCols = matrix[0].length;
    if (numCols === 1) {
      return matrix[0][0];
    }
    let result = 0;
    let setIndex = 0;
    for (let i = 0; i < numCols; i++) {
      result +=
        Math.pow(-1, i) *
        matrix[setIndex][i] *
        this.determinant(this.subMatrix(matrix, setIndex, i));
    }
    return result;
  };
}

export default Determinant;
class Determinant:
  def sub_matrix(self, matrix, i, j):
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

  def is_matrix_square(self, matrix):
    num_rows = len(matrix)
    for row in matrix:
      if num_rows != len(row):
        return False
    return True

  def determinant(self, matrix):
    if not isinstance(matrix, list) or len(matrix) == 0 or not isinstance(matrix[0], list):
      raise ValueError("Input is not a valid 2D matrix.")
    if not self.is_matrix_square(matrix):
      raise ValueError("Square matrix is required.")
    num_cols = len(matrix[0])
    if num_cols == 1:
      return matrix[0][0]
    result = 0
    set_index = 0
    for i in range(num_cols):
      result += ((-1) ** i) * matrix[set_index][i] * self.determinant(self.sub_matrix(matrix, set_index, i))
    return result