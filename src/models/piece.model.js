const mongoose = require('mongoose')
const validatorPlugin = require('mongoose-unique-validator');

let types = {
    values: ['knight','king', 'queen', 'rook', 'bishop','pawn'],
    message:'No existe esa pieza'};

const PieceSchema = mongoose.Schema({
    rack_position: {type: String ,required: true},
    file_position: {type: String ,required: true},
    type: { 
        type: String,
        enum: types,
        required: true
    },
});

PieceSchema.methods.isKing = async () => this.type === 'king' ? true : false

PieceSchema.plugin(validatorPlugin,'{PATH} debe ser unico');

module.exports = mongoose.model('piece', PieceSchema);