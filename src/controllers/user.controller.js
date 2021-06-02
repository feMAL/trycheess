let _userService = null;
class UserController {

    constructor({UserService}){
        _userService = UserService;
    }

    async get(req,res){
        console.log('# GET - get user by username')
        let { userId } = req.params;
        let user = await _userService.get(userId);
        res.status(200).send({ok:true, user});
    }

    async getAll(req, res){
        const users = await _userService.getAll();
        return res.send(users);
    }

    async update(req,res){
        let {body} = req;
        let {userId} = req.params;

        if(body && body.role) delete body.role;
        if(body && body.status) delete body.status; 
        
        const updateUser = await _userService.update(userId,body);
        
        return res.send(updateUser);
    }

    async delete (req, res){
        let { userId } = req.params;
        const deletedUser = await _userService.delete(userId);
        return res.send(deletedUser);
    }

}

module.exports = UserController;