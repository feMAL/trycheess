const mongoose = require('mongoose')

const PlayerSchema = mongoose.Schema({
    alias: {
        type: String,
        require: true
    },
    score: { type: Number, require:true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true
    }
});

module.exports = mongoose.model('player', PlayerSchema);