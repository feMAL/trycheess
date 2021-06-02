const { Router } = require('express');
const { AuthMiddleware, RoleMiddleware } = require('../middlewares');

module.exports = function ({AuthController}) {
    const router = Router();

    router.post('/singup', AuthController.singup);
    router.post('/singin', AuthController.singin);
    router.get('/:idToElevate/:roleToChange', [AuthMiddleware, RoleMiddleware] , AuthController.elevatePrivileges);

    return router;
}