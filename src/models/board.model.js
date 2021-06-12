const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    board: [[{
        type: Schema.Types.ObjectId,
        ref: 'piece',
        required: true
    }]],
    player1: {
        type: Schema.Types.ObjectId,
        ref: 'player',
        required: true
    },
    player2: {
        type: Schema.Types.ObjectId,
        ref: 'player',
        required: true
    },
    register: {
        type: Schema.Types.ObjectId,
        ref: 'register'
    }
});

BoardSchema.methods.checkBoard = function(){
    let boardObj = this.toObject();
    let board = boardObj.board;
    
    if(board.length === 8){
        for(let FILES of board){
            if(FILES.length === 8){
                return true;
            }
        }
    }
    return false;
};

module.exports = mongoose.model('board',BoardSchema);