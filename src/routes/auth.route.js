const { Router } = require('express');
module.exports = function ({AuthController}) {
    let router = Router();

    router.post('/singup', AuthController.singup);
    router.post('/singin', AuthController.singin);

    return router;
}