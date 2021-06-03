const {Router} = require('express');
module.exports = function({BoardController}){
    let route = Router();

    route.post('/create',BoardController.create);

    return route;
}