const BaseService = require("./base.service");
let _boardRepo = null;

class BoardService extends BaseService{
    
    constructor({BoardRepository}){
        super(BoardRepository);
        _boardRepo = BoardRepository;
    }

    async create(player,opponent){
        let obj = {
            player1: player,
            player2: opponent
        };
        let board = await _boardRepo.init();
        await _boardRepo.loadPieces(board, player._id, opponent._id);
        obj.board = board;
        let boardSaved = await _boardRepo.create(obj);
        return boardSaved;
    }

}
module.exports = BoardService;