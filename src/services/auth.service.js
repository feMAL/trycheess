const {JWTHelper} = require('../helpers');
let _userService = null;

class AuthService {
    
    constructor({UserService}){
        _userService = UserService;
    }

    //SINGUP Function
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

    //SINGIN Function 
    async singin(credentials){
        const { username, password } = credentials;

        const USER = await _userService.getUserByUsername(username);
        
        if(!USER.status) {
            const error = new Error();
            error.status = 401;
            error.message = 'User was deleted';
            throw error;
        }

        const passValid = USER.comparePassword(password);
        if(!passValid){
            const error = new Error();
            error.status = 401;
            error.message = 'User or Password failed';
            throw error;
        }
        const token = await JWTHelper.generateToken(USER);
        return {token, user: USER};
    }

    async elevatePrivileges(id, role){
        const user = await _userService.get(id);
        if(!user){
            const error = new Error();
            error.status = 401;
            error.message = 'User does not exist';
            throw error;
        }
        switch(role){
            case 'moderator':
                user.role = 'ROLE_MODERATOR';
                break;
            case 'admin':
                user.role = 'ROLE_ADMIN';
                break;
            case 'user':
                user.role = 'ROLE_USER';
                break;
            default:
                let error = new Error();
                error.status = 400;
                error.message = 'Ese privilegio no existe';
                throw error;
        }
        return await _userService.update(id,user);
    }

}
module.exports = AuthService;