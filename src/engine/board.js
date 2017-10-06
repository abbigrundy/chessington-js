import Player from "./player";
import GameSettings from "./gameSettings";
import Square from "./square";

export default class Board {
  constructor(currentPlayer) {
    this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
    this.grid = this.createGrid();
  }

  createGrid() {
    const grid = new Array(GameSettings.BOARD_SIZE);
    for (let i = 0; i < grid.length; i++) {
      grid[i] = new Array(GameSettings.BOARD_SIZE);
    }
    return grid;
  }

  setPiece(square, piece) {
    this.grid[square.row][square.col] = piece;
  }

  getPiece(square) {
    return this.grid[square.row][square.col];
  }

  findPiece(pieceToFind) {
    for (let row = 0; row < this.grid.length; row++) {
      for (let col = 0; col < this.grid[row].length; col++) {
        if (this.grid[row][col] === pieceToFind) {
          return Square.at(row, col);
        }
      }
    }
    throw new Error("The supplied piece is not on the board");
  }

  movePiece(fromSquare, toSquare) {
    const movingPiece = this.getPiece(fromSquare);
    if (!!movingPiece && movingPiece.player === this.currentPlayer) {
      this.setPiece(toSquare, movingPiece);
      this.setPiece(fromSquare, undefined);
      this.currentPlayer =
        this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE;
    }
  }
}
