let _userRepo = null;
class UserService {

    constructor({UserRepository}){
        _userRepo = UserRepository;
    }

    getUserByUsername = async (username) => await _userRepo.getUserByUsername(username);

    getUserByEmail = async (email) => await _userRepo.getUserByEmail(email);

    create = async (user) => await _userRepo.create(user);

}
module.exports = UserService