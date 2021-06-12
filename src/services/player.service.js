const BaseService = require("./base.service");

let _playerRepo = null;
class PlayerService extends BaseService {
    constructor({PlayerRepository}){
        super(PlayerRepository)
        _playerRepo = PlayerRepository;
    }

    async create(rawplay, user){
        let player = rawplay;
        player.user = user; 
        player = await _playerRepo.create(player);
        
        return player;
    }

    async getPlayerByUserId(user){
        return await _playerRepo.getPlayerByUserId(user);
    }

}
module.exports = PlayerService;