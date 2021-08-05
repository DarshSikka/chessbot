const board = [];
let letters = "nabcdefgh".split("");
for (let i = 1; i < 9; i++) {
  const row = [];
  for (let i2 = 1; i2 < 9; i2++) {
    row.push({
      piece: "",
      squareId: `${letters[i2]}${i}`,
      color: (i + i2) % 2 === 0,
      pieceColor: true,
    });
  }
  board.unshift(row);
}
console.log(JSON.stringify(board));
