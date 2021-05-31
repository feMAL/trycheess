let _userService = null;
class UserController {

    constructor({UserService}){
        _userService = UserService;
    }

    async get(req,res){
        console.log('# GET - get user by username')
        let { username } = req.body;
        let user = await _userService.get(username);
        res.status(200).send({ok:true, user});
    }

    async getAll(req,res){
        let user = await _userService.getAll();
        res.status(200).send({ok:true, user});
    }

    async update(req,res){
        
    }

    async delete(req,res){

    }

}

module.exports = UserController;