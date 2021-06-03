const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    alias: {
        type: String,
        require: true
    },
    score: {
        type: Number,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        require: true
    }
});

module.exports = mongoose.model('player', PlayerSchema);