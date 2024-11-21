class Islands {
  islands = (matrixGrid) => {
    const matrix = matrixGrid;
    let counter = 0;

    const flood = (row, col) => {
      if (row < 0 || col < 0) return; // Off the map above or left
      if (row >= matrix.length || col >= matrix[row].length) return; // Off the map below or right

      const tile = matrix[row][col];
      if (tile !== "1") return;

      matrix[row][col] = "0";

      flood(row + 1, col); // Down
      flood(row - 1, col); // Up
      flood(row, col + 1); // Right
      flood(row, col - 1); // Left
    };

    for (let row = 0; row < matrix.length; row += 1) {
      for (let col = 0; col < matrix[row].length; col += 1) {
        const current = matrix[row][col];
        if (current === "1") {
          flood(row, col);
          counter += 1;
        }
      }
    }
    return counter;
  };
}

export default Islands;