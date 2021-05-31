let _userRepo = null;
class UserService {

    constructor({UserRepository}){
        _userRepo = UserRepository;
    }

    getUserByUsername = async (username) => await _userRepo.getUserByUsername(username);

}
module.exports = UserService