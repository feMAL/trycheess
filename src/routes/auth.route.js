const { Router } = require('express');
module.exports = function ({AuthController}) {
    const router = Router();

    router.post('/singup', AuthController.singup);
    router.post('/singin', AuthController.singin);

    return router;
}