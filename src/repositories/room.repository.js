const BaseRepository = require("./base.repository");
let _room = null;
class RoomRepository extends BaseRepository {
    constructor({Room}){
        super(Room);
        _room = Room;
    }

    
}

module.exports = RoomRepository;