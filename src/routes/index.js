const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression')

const { NotFoundMiddleware, ErrorMiddleware } = require('../middlewares');
require('express-async-errors');

module.exports = function ({UserRoutes, AuthRoutes, BoardRoutes}) {
    let router = express.Router();
    let apiRoutes = express.Router();

    apiRoutes
    .use(express.json({strict: true}))
    .use(cors())
    .use(helmet())
    .use(compression());
    //.use(express.urlencoded({extended: false}))

    apiRoutes.use('/user', UserRoutes);
    apiRoutes.use('/auth', AuthRoutes);
    apiRoutes.use('/board', BoardRoutes);

    router.use('/v1/api',apiRoutes);
    //app.use(express.static(path.resolve(__dirname, '../../public')));

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router;
}
