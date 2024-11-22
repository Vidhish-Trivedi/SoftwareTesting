class Islands:
  def islands(self, matrixGrid):
    matrix = matrixGrid
    counter = 0

    def flood(row, col):
      if row < 0 or col < 0:
        return  # Off the map above or left
      if row >= len(matrix) or col >= len(matrix[row]):
        return  # Off the map below or right

      tile = matrix[row][col]
      if tile != "1":
        return

      matrix[row][col] = "0"

      flood(row + 1, col)  # Down
      flood(row - 1, col)  # Up
      flood(row, col + 1)  # Right
      flood(row, col - 1)  # Left

    for row in range(len(matrix)):
      for col in range(len(matrix[row])):
        current = matrix[row][col]
        if current == "1":
          flood(row, col)
          counter += 1

    return counter