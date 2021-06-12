const { Router } = require('express');
const { AuthMiddleware } = require('../middlewares');
module.exports = function({BoardController}){
    let route = Router();

    route.post('/create/:opponentID', AuthMiddleware ,BoardController.create);
    route.post('/:boardID/move/:pieceID',AuthMiddleware, BoardController.move);
    
    return route;
}