import Piece from "./piece";
import Player from "../player";

export default class Pawn extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const currentLocation = board.findPiece(this);
    if (this.player === Player.WHITE) {
      currentLocation.row++;
    } else {
      currentLocation.row--;
    }
    return new Array(currentLocation);
  }
}
