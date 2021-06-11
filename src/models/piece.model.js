const mongoose = require('mongoose')

let types = {
    values: ['knight','king', 'queen', 'rook', 'bishop','pawn','no-piece'],
    message:'No existe esa pieza'
};

const PieceSchema = new mongoose.Schema({
    player: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: types,
        required: true
    }
});

PieceSchema.methods.isKing = async () => this.type === 'king' ? true : false

module.exports = mongoose.model('piece', PieceSchema);