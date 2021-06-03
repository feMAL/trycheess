const mongoose = require('mongoose')

let types = {
    values: ['knight','king', 'queen', 'rook', 'bishop','pawn'],
    message:'No existe esa pieza'
};

const PieceSchema = mongoose.Schema({
    color: {
        type: String,
        required: true
    },
    type: { 
        type: String,
        enum: types,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
});

PieceSchema.methods.isKing = async () => this.type === 'king' ? true : false

module.exports = mongoose.model('piece', PieceSchema);