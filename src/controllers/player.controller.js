let _playerService = null;
class PlayerController {
    
    constructor({PlayerService}){
        _playerService = PlayerService;
    }

    async get(req, res){

    }

    async update(req,res){

    }

    async create(req,res){
        let body = req.body;
        let user = req.user;
        if(!body.alias){
            let error = new Error();
            error.status = 400;
            error.message = 'you have not alias, you need it!';
            throw error;
        }
        if(!body.message) body.message = 'you have not message to world';
        body.score = 0;
        let player = await _playerService.create(body,user);
        res.status(201).send({ok:true, player});
    }
}
module.exports = PlayerController;