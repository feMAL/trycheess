let _boardService = null;
class BoardController {
    constructor( {BoardService}){
        _boardService = BoardService;
    }

    async create(req, res){
        let board = await _boardService.create();
        res.send(board);
    }
}
module.exports = BoardController;