const BaseService = require("./base.service");
let _boardRepo = null;

class BoardService extends BaseService{
    
    constructor({BoardRepository}){
        super(BoardRepository);
        _boardRepo = BoardRepository;
    }

    async create(){
        await _boardRepo.init();
        await _boardRepo.loadPieces()
        return await _boardRepo.see();
    }

}
module.exports = BoardService;