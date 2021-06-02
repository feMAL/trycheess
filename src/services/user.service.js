const BaseService = require("./base.service");

let _userRepo = null;
class UserService extends BaseService {

    constructor({UserRepository}){
        super(UserRepository);
        _userRepo = UserRepository;
    }

    getUserByUsername = async (username) => await _userRepo.getUserByUsername(username);

    getUserByEmail = async (email) => await _userRepo.getUserByEmail(email);

}
module.exports = UserService