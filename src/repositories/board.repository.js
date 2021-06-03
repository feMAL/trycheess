const BaseRepository = require("./base.repository");

const RACKS = 8;
const FILES = 8;
let board = [];
let _board = null;

class BoardRepository extends BaseRepository {

    constructor({Board}){
        super(Board);
        _board = Board;
    }

    async init(){
        for(let x = 0;  x < RACKS; x++){
            let file = []
            for(let y = 0; y < FILES; y++){
                file.push(true);
            }
            board.push(file);
        }
    }

    async loadPieces(){
        let nroLine = 1;
        for(let line of board){
            if(nroLine == 1 || nroLine == board.length){
                let nrosqr = 1;
                for(let squer of line){
                    if(nrosqr == 1 || nrosqr == 8){
                        board[nroLine - 1][nrosqr - 1] = 'rook';
                    }
                    if(nrosqr == 2 || nrosqr == 7){
                        board[nroLine - 1][nrosqr - 1] = 'alfil';
                    }
                    if(nrosqr == 3 || nrosqr == 6){
                        board[nroLine - 1][nrosqr - 1] = 'knigth';
                    }
                    if(nrosqr == 4){
                        board[nroLine - 1][nrosqr - 1] = 'king'
                    }
                    if(nrosqr == 5){
                        board[nroLine - 1][nrosqr - 1] = 'queen';
                    }
                    nrosqr += 1
                }
            }
            nroLine += 1;
        }
    }

    async see(){
        let boardToString = [];
        for(let file of board){
            boardToString.push(file.toString());
        }
        return boardToString;
    }

}
module.exports = BoardRepository;