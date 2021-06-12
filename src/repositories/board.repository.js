const BaseRepository = require("./base.repository");

const RACKS = 8;
const FILES = 8;

let _board = null;
let _piece = null;

class BoardRepository extends BaseRepository {

    constructor({Board, Piece}){
        super(Board);
        _board = Board;
        _piece = Piece;
    }

    async init(){
        let board = [];
        for(let x = 0;  x < RACKS; x++){
            let file = [];
            for(let y = 0; y < FILES; y++){
                file.push(true);
            }
            board.push(file);
        }
        return board;
    }

    async loadPieces(board, player,opponent){
        console.log(player, opponent)
        for(let l = 0;  l < FILES; l++){
            if( l == 0 ){
                for(let s = 0; s < RACKS; s++){
                    if(s == 0 || s == (RACKS - 1)) board[l][s] = await _piece.create({player: opponent,type: 'rook'});
                    if(s == 1 || s == (RACKS - 2)) board[l][s] = await _piece.create({player: opponent,type: 'knight'});
                    if(s == 2 || s == (RACKS - 3)) board[l][s] = await _piece.create({player: opponent,type: 'bishop'});
                    if(s == 3) board[l][s] = await _piece.create({player: opponent, type: 'queen'});
                    if(s == 4) board[l][s] = await _piece.create({player: opponent, type: 'king'});
                }
            }
            if( l == (FILES - 1)){
                for(let s = 0; s < RACKS; s++){
                    if(s == 0 || s == (RACKS - 1)) board[l][s] = await _piece.create({player: player,type:'rook'});
                    if(s == 1 || s == (RACKS - 2)) board[l][s] = await _piece.create({player: player,type:'knight'});
                    if(s == 2 || s == (RACKS - 3)) board[l][s] = await _piece.create({player: player,type:'bishop'});
                    if(s == 3) board[l][s] = await _piece.create({player: player, type:'queen'});
                    if(s == 4) board[l][s] = await _piece.create({player: player, type:'king'});
                }
            }
            if( l == 1 ){
                for (let s = 0; s < RACKS; s++) board[l][s] = await _piece.create({ player: opponent, type:'pawn'});
            }
            if( l == (FILES - 2)){
                for (let s = 0; s < RACKS; s++) board[l][s] = await _piece.create({ player: player, type:'pawn'});
            }
            if(l == 2 || l == 3 || l == 4 || l == 5){
                for (let s = 0; s < RACKS; s++) board[l][s] = await _piece.create({ player: null, type:'no-piece'});
            }
        }
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

    async see(board){
        let boardToString = [];
        for(let file of board){
            let files = [];
            for(let squer of file){
                files.push(squer.type);
            }
            boardToString.push(files.toString());
        }
        return boardToString;
    }

}
module.exports = BoardRepository;