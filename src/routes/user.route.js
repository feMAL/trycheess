const { Router } = require('express');
const { AuthMiddleware, RoleMiddleware } = require('../middlewares');

module.exports = function ({UserController}) {
    const router = Router();

    router.get("/:userId", UserController.get);
    router.get("", [AuthMiddleware, RoleMiddleware] ,UserController.getAll);
    router.patch("/:userId", AuthMiddleware, UserController.update);
    router.delete("/:userId", [AuthMiddleware, RoleMiddleware], UserController.delete);
    
    return router;
}