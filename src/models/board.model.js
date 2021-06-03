const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pieces: [{
        type: Schema.Types.ObjectId,
        ref: 'pieces'
    }],
    /*register: {
        type: Schema.Types.ObjectId,
        ref: 'register',
        required: true
    }*/
});

module.exports = mongoose.model('board',BoardSchema);