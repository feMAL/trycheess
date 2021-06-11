const BaseRepository = require("./base.repository");
let _piece = null;

class PieceRepository extends BaseRepository {
    
    constructor({Piece}){
        super(Piece);
        _piece = Piece;
    }

    move(pieceMove, piece){
        return pieceMove(piece);
    }

}

module.exports = PieceRepository;