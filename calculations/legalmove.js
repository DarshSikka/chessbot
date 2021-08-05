const diagonals = [
  ["a1", "b2", "c3", "d4", "e5", "f6", "g7", "h8"],
  ["b1", "c2", "d3", "e4", "f5", "g6", "h7"],
  ["c1", "d2", "e3", "f4", "g5", "h6"],
  ["d1", "e2", "f3", "g4", "h5"],
  ["e1", "f2", "g3", "h4"],
  ["f1", "g2", "h3"],
  ["g1", "h2"],
  ["a2", "b3", "c4", "d5", "e6", "f7", "g8"],
  ["a3", "b4", "c5", "d6", "e7", "f8"],
  ["a4", "b5", "c6", "d7", "e8"],
  ["a5", "b6", "c7", "d8"],
  ["a6", "b7", "c8"],
  ["a7", "b8"],
  ["a8", "b7", "c6", "d5", "e4", "f3", "g2", "h1"],
  ["b8", "c7", "d6", "e5", "f4", "g3", "h2"],
  ["c8", "d7", "e6", "f5", "g4", "h3"],
  ["d8", "e7", "f6", "g5", "h4"],
  ["e8", "f7", "g6", "h5"],
  ["f8", "g7", "h6"],
  ["g8", "h7"],
  ["a7", "b6", "c5", "d4", "e3", "f2", "g1"],
  ["a6", "b5", "c4", "d3", "e2", "f1"],
  ["a5", "b4", "c3", "d2", "e1"],
  ["a4", "b3", "c2", "d1"],
  ["a3", "b2", "c1"],
  ["a2", "b1"],
  ["h7", "g6", "f5", "e4", "d3", "c2", "b1"],
  ["h6", "g5", "f4", "e3", "d2", "c1"],
  ["h5", "g4", "f3", "e2", "d1"],
  ["h4", "g3", "f2", "e1"],
  ["h3", "g2", "f1"],
  ["h2", "g1"],
  ["g8", "f7", "e6", "d5", "c4", "b3", "a2"],
  ["f8", "e7", "d6", "c5", "b4", "a3"],
  ["e8", "d7", "c6", "b5", "a4"],
  ["d8", "c7", "b6", "a5"],
  ["c8", "b7", "a6"],
  ["b8", "a7"],
  ["g1", "f2", "e3", "d4", "c5", "b6", "a7"],
  ["f1", "e2", "d3", "c4", "b5", "a6"],
  ["e1", "d2", "c3", "b4", "a5"],
  ["d1", "c2", "b3", "a4"],
  ["c1", "b2", "a3"],
  ["b1", "a2"],
  ["h2", "g3", "f4", "e5", "d6", "c7", "b8"],
  ["h3", "g4", "f5", "e6", "d7", "c8"],
  ["h4", "g5", "f6", "e7", "d8"],
  ["h5", "g6", "f7", "e8"],
  ["h6", "g7", "f8"],
  ["h7", "g8"],
];
let files = "abcdefgh".split("");
const calculateRook = (square1, square2) => {
  const fileAndRow1 = square1.squareId.split("");
  const fileAndRow2 = square2.squareId.split("");
  const file1 = fileAndRow1[0];
  const file2 = fileAndRow2[0];
  const row1 = fileAndRow1[1];
  const row2 = fileAndRow2[1];
  if (file1 === file2 || row1 === row2) {
    return {
      error: false,
    };
  } else {
    return {
      error: true,
    };
  }
};
const calculateBishop = (square1, square2) => {
  if (square2.color !== square2.color) {
    return {
      error: true,
      message: "Illegal Move",
    };
  } else {
    let whichArray = diagonals.filter((ele) => ele.includes(square1.squareId));
    let secondArray = whichArray.filter((ele) =>
      ele.includes(square2.squareId)
    );
    if (secondArray.length > 0) {
      return {
        error: false,
        message: "Legal Move",
      };
    } else {
      return {
        error: true,
        message: "Illegal Move",
      };
    }
  }
};
const calculateKing = (square1, square2) => {
  const fileAndRow1 = square1.squareId.split("");
  const fileAndRow2 = square2.squareId.split("");
  const file1 = fileAndRow1[0];
  const file2 = fileAndRow2[0];
  const row1 = fileAndRow1[1];
  const row2 = fileAndRow2[1];
  console.log(file1, file2, row1, row2);
  if (
    Math.abs(row1 - row2) <= 1 &&
    Math.abs(files.indexOf(file1) - files.indexOf(file2)) <= 1
  ) {
    return {
      error: false,
    };
  } else {
    return {
      error: true,
    };
  }
};
const calculateQueen = (square1, square2, board) => {
  if (
    !calculateRook(square1, square2).error ||
    !calculateBishop(square1, square2).error
  ) {
    return {
      error: false,
    };
  } else {
    return {
      error: true,
    };
  }
};
const calculate = (square1, square2, board) => {
  if (square1.piece === "B") {
    return calculateBishop(square1, square2);
  } else if (square1.piece === "R") {
    return calculateRook(square1, square2);
  } else if (square1.piece === "K") {
    return calculateKing(square1, square2);
  } else if (square1.piece === "Q") {
    return calculateQueen(square1, square2);
  }
};
console.log(
  calculate(
    { piece: "Q", squareId: "b6", color: false, pieceColor: false },
    {
      piece: "P",
      squareId: "h5",
      color: false,
      pieceColor: false,
    },
    [
      [
        { piece: "R", squareId: "a8", color: false, pieceColor: false },
        { piece: "N", squareId: "b8", color: true, pieceColor: false },
        { piece: "B", squareId: "c8", color: false, pieceColor: false },
        { piece: "Q", squareId: "d8", color: true, pieceColor: false },
        { piece: "K", squareId: "e8", color: false, pieceColor: false },
        { piece: "B", squareId: "f8", color: true, pieceColor: false },
        { piece: "N", squareId: "g8", color: false, pieceColor: false },
        { piece: "R", squareId: "h8", color: true, pieceColor: false },
      ],
      [
        { piece: "P", squareId: "a7", color: true, pieceColor: false },
        { piece: "P", squareId: "b7", color: false, pieceColor: false },
        { piece: "P", squareId: "c7", color: true, pieceColor: false },
        { piece: "P", squareId: "d7", color: false, pieceColor: false },
        { piece: "P", squareId: "e7", color: true, pieceColor: false },
        { piece: "P", squareId: "f7", color: false, pieceColor: false },
        { piece: "P", squareId: "g7", color: true, pieceColor: false },
        { piece: "P", squareId: "h7", color: false, pieceColor: false },
      ],
      [
        { piece: "", squareId: "a6", color: false, pieceColor: true },
        { piece: "", squareId: "b6", color: true, pieceColor: true },
        { piece: "", squareId: "c6", color: false, pieceColor: true },
        { piece: "", squareId: "d6", color: true, pieceColor: true },
        { piece: "", squareId: "e6", color: false, pieceColor: true },
        { piece: "", squareId: "f6", color: true, pieceColor: true },
        { piece: "", squareId: "g6", color: false, pieceColor: true },
        { piece: "", squareId: "h6", color: true, pieceColor: true },
      ],
      [
        { piece: "", squareId: "a5", color: true, pieceColor: true },
        { piece: "", squareId: "b5", color: false, pieceColor: true },
        { piece: "", squareId: "c5", color: true, pieceColor: true },
        { piece: "", squareId: "d5", color: false, pieceColor: true },
        { piece: "", squareId: "e5", color: true, pieceColor: true },
        { piece: "", squareId: "f5", color: false, pieceColor: true },
        { piece: "", squareId: "g5", color: true, pieceColor: true },
        { piece: "", squareId: "h5", color: false, pieceColor: true },
      ],
      [
        { piece: "", squareId: "a4", color: false, pieceColor: true },
        { piece: "", squareId: "b4", color: true, pieceColor: true },
        { piece: "", squareId: "c4", color: false, pieceColor: true },
        { piece: "", squareId: "d4", color: true, pieceColor: true },
        { piece: "", squareId: "e4", color: false, pieceColor: true },
        { piece: "", squareId: "f4", color: true, pieceColor: true },
        { piece: "", squareId: "g4", color: false, pieceColor: true },
        { piece: "", squareId: "h4", color: true, pieceColor: true },
      ],
      [
        { piece: "", squareId: "a3", color: true, pieceColor: true },
        { piece: "", squareId: "b3", color: false, pieceColor: true },
        { piece: "", squareId: "c3", color: true, pieceColor: true },
        { piece: "", squareId: "d3", color: false, pieceColor: true },
        { piece: "", squareId: "e3", color: true, pieceColor: true },
        { piece: "", squareId: "f3", color: false, pieceColor: true },
        { piece: "", squareId: "g3", color: true, pieceColor: true },
        { piece: "", squareId: "h3", color: false, pieceColor: true },
      ],
      [
        { piece: "P", squareId: "a2", color: false, pieceColor: true },
        { piece: "P", squareId: "b2", color: true, pieceColor: true },
        { piece: "P", squareId: "c2", color: false, pieceColor: true },
        { piece: "P", squareId: "d2", color: true, pieceColor: true },
        { piece: "P", squareId: "e2", color: false, pieceColor: true },
        { piece: "P", squareId: "f2", color: true, pieceColor: true },
        { piece: "", squareId: "g2", color: false, pieceColor: true },
        { piece: "", squareId: "h2", color: true, pieceColor: true },
      ],
      [
        { piece: "", squareId: "a1", color: true, pieceColor: true },
        { piece: "", squareId: "b1", color: false, pieceColor: true },
        { piece: "", squareId: "c1", color: true, pieceColor: true },
        { piece: "", squareId: "d1", color: false, pieceColor: true },
        { piece: "", squareId: "e1", color: true, pieceColor: true },
        { piece: "", squareId: "f1", color: false, pieceColor: true },
        { piece: "", squareId: "g1", color: true, pieceColor: true },
        { piece: "", squareId: "h1", color: false, pieceColor: true },
      ],
    ]
  )
);
const moves = {};
