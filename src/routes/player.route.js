let { Router } = require('express');
let { AuthMiddleware } = require('../middlewares')
module.exports = function ({PlayerController}) {
    let router = Router();

    router.post('/create', AuthMiddleware, PlayerController.create);
    router.post('/update', AuthMiddleware, PlayerController.update);
    router.get('/get', AuthMiddleware, PlayerController.get);

    return router;
}