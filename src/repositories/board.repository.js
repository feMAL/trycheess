const BaseRepository = require("./base.repository");

const RACKS = 8;
const FILES = 8;
let board = [];
let _board = null;
let _piece = null;

class BoardRepository extends BaseRepository {

    constructor({Board, Piece}){
        super(Board);
        _board = Board;
        _piece = Piece;
    }

    async init(){
        for(let x = 0;  x < RACKS; x++){
            let file = [];
            for(let y = 0; y < FILES; y++){
                file.push(true);
            }
            board.push(file);
        }
    }

    async loadPieces(player){
        for(let l = 0;  l < FILES; l++){
            if(l == 0 || l == (FILES - 1)){
                for(let s = 0; s < RACKS; s++){
                    if(s == 0 || s == (RACKS - 1)) board[l][s] = await _piece.create({player: player,type:'rook'});
                    if(s == 1 || s == (RACKS - 2)) board[l][s] = await _piece.create({player: player,type:'knigth'});
                    if(s == 2 || s == (RACKS - 3)) board[l][s] = await _piece.create({player: player,type:'alfil'});
                    if(s == 3) board[l][s] = await _piece.create({player: player, type:'queen'});
                    if(s == 4) board[l][s] = await _piece.create({player: player, type:'king'});
                }
            }
            if(l == 1 || l == (FILES - 2)){
                for (let s = 0; s < RACKS; s++) board[l][s] = await _piece.create({player: player, type:'pawn'});
            }
        }
    }

    async see(){
        let boardToString = [];
        for(let file of board){
            boardToString.push(file.toString());
        }
        return boardToString;
    }

    /**
     * MOVIMIENTOS DEL TABLERO!
     */
    async movePiece(){
        let knightMove = (x,y) => {}
        let kingMove = (x,y) => {}
        let queenMove = (x,y) => {}
        let rookMove = (x,y) => {}
        let bishopMove = (x,y) => {}
        let pawnMove = (x,y) => {}
        let nopiece = (x,y) => {}

    }

}
module.exports = BoardRepository;