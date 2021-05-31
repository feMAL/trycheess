const express = require('express');
const path = require('path');
const cors = require('cors');

module.exports = function ({UserRoutes}) {
    let app = express.Router();
    let routes = express.Router()
    
    routes.use('/user', UserRoutes);

    routes
        .use(express.json())
        .use(cors())
        .use(express.static(path.resolve(__dirname, '../../public')));
        //.use(helmet())
        //.use(compression());

    app.use('/v1/api',routes);

    return app;
}
