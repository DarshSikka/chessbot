class Square {
  constructor(obj) {
    this.dark = obj.dark;
    this.piece = obj.piece;
    this.pieceColor = obj.pieceColor;
  }
  removePiece() {
    this.piece = "";
  }
  putPiece(piece, color) {
    this.piece = color;
  }
}
module.exports = Square;
