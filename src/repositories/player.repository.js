const BaseRepository = require("./base.repository");

let _player = null;
class PlayerRepository extends BaseRepository {
    constructor({Player}){
        super(Player);
        _player = Player;
    }
    
    async getPlayerByUserId(user){
        return await _player.findOne({ user });
    }
}
module.exports = PlayerRepository;