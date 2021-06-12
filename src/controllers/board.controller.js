let _boardService = null;
let _playerService = null;
let _pieceService = null;
class BoardController {

    constructor( {BoardService, PlayerService, PieceService }){
        _boardService = BoardService;
        _playerService = PlayerService;
        _pieceService = PieceService;
    }

    async create(req, res){
        let user = req.user;
        let {opponentID} = req.params;
        let player = await _playerService.getPlayerByUserId(user._id);
        let opponent = await _playerService.get(opponentID);
        if(!player || !opponent){
            let error = new Error();
            error.status = 404;
            error.message = 'player not found';
            throw error;
        }
        let board = await _boardService.create(player, opponent);
        res.status(201).send(board);
    }

    async move(req, res){
        let user = req.user;
        let {pieceID, boardID} = req.params;
        
        let player = await _playerService.getPlayerByUserId(user._id);
        let board = await _boardService.get(boardID);
        if(!board){
            let error = new Error();
            error.status = 404;
            error.message = 'board does not exist';
            throw error;
        }
        for (let files of board.board){
            for(let piece of files){
                indexOf
            }
        }
        await _boardService.move(board,pieceID, player);
        res.status(201).send(board);
    }
}
module.exports = BoardController;