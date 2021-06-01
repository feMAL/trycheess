const {JWTHelper} = require('../helpers');
let _userService = null;

class AuthService {
    constructor({UserService}){
        _userService = UserService;
    }

    async singup(user){
        const { username, email } = user;

        const userExist = await _userService.getUserByUsername(username);
        const emailExist = await _userService.getUserByEmail(email);
        
        if(userExist || emailExist){
            const error = new Error();
            error.status = 403;
            error.message = 'User o email already used';
            throw error;
        }
        return await _userService.create(user);
    }

    async singin(credentials){
        let { username, password } = credentials;

        const USER = await _userService.getUserByUsername(username);
        let passValid = USER.comparePassword(password);
        if(!passValid){
            const error = new Error();
            error.status = 401;
            error.message = 'User or Password failed';
            return error;
        }
        let token = await JWTHelper.generateToken(USER);
        return {token, user: USER};
    }

}
module.exports = AuthService;