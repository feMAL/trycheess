const mongoose = require('mongoose')
const muv = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const types = {
    values: ['knight', 'king', 'queen', 'rook', 'bishop', 'pawn', 'no-piece'],
    message: '{VALUES} No existe ese tipo de pieza'
};

const PieceSchema = new Schema({
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'player'
    },
    type: {
        type: String,
        default: 'no-piece',
        enum: types,
        required: [true, 'Necesita un typo de dato']
    }
});

PieceSchema.methods.isKing = async () => this.type === 'king' ? true : false ;

PieceSchema.plugin(muv, {message: '{Path} Debe ser unico'});

module.exports = mongoose.model('piece', PieceSchema);