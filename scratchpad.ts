Board.prototype.loopThroughBoard = function() {
  for (var i = 0; i < this.adjacentBlanks.length; i++) {
    if (this.checked.indexOf(this.adjacentBlanks[i].toString()) === -1) {
      this.checked.push(this.adjacentBlanks[i].toString());
      this.pushAdjacents([this.adjacentBlanks[i][0], this.adjacentBlanks[i][1]]);
    }
  }
}


// Board.prototype.pushAdjacents = function(coordinates) {
//   var row = coordinates[0];
//   var column = coordinates[1];
//
//   for (rowAdjust = -1; rowAdjust < 2; rowAdjust++) {
//     for (columnAdjust = -1; columnAdjust < 2; columnAdjust++) {
//       var newCoordinates = [(row + rowAdjust), (column + columnAdjust)];
//       if ((row+rowAdjust >= 0) && (row+rowAdjust <= this.gridWidth-1) && (column+columnAdjust >= 0) && (column+columnAdjust <= this.gridWidth-1)) {
//         var squareToCheck = this.grid[newCoordinates[0]][newCoordinates[1]];
//         if (!this.grid[row+rowAdjust][column+columnAdjust].hasBomb) {
//           if (squareToCheck.value === 0 && !squareToCheck.hasFlag) {
//             this.adjacentBlanks.push(newCoordinates);
//             this.toBeRevealed.push(newCoordinates);
//           } else if (squareToCheck.value > 0) {
//             this.toBeRevealed.push(newCoordinates);
//           }
//         }
//       }
//     }
//   }
