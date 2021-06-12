let BaseService = require('./base.service');
let _pieceRepository = null
class PieceService extends BaseService {
    constructor({PieceRepository}){
        super(PieceRepository)
        _pieceRepository = PieceRepository;
    }

}
module.exports = PieceService;