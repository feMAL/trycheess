const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RoomSchema = new Schema({
    owner: {
        type: Schema.Type.ObjectId,
        ref: 'user',
        required: true
    },
    players : [{
        type: Schema.Types.ObjectId,
        ref: 'player',
        required: true
    }],
    visitors: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    board: [{
        type: Schema.Types.ObjectId,
        ref: 'board',
        required: true
    }]
});

module.exports = mongoose.model('room', RoomSchema);