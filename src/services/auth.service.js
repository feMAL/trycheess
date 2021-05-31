let _userService = null;
class AuthService {
    constructor({UserService}){
        _userService = UserService;
    }

    async singup(user){
        const { username } = user;
        const userExist = await _userService.getUserByUsername(username);
        
        if(userExist){
            const error = new Error();
            error.status = 403;
            error.message = 'User already exists';
            throw error;
        }
        return await _userService.create(user); 
    }

    async singin(){

    }
}
module.exports = AuthService;