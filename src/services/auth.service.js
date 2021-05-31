let _userService = null;
class AuthService {
    constructor({UserService}){
        _userService = UserService;
    }

    async singup(user){
        const { username, email } = user;
        console.log(username, email);
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

        const user = await _userService.getUserByUsername(username);
        let passValid = user.comparePassword(password);
        
        return await _userService.generateToken(user);       
        
    }

}
module.exports = AuthService;