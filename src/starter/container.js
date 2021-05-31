const {asClass, asFunction, asValue, createContainer} = require('awilix');
//MODELS
const { Table, Register, Player, Piece, User} = require('../models');
//REPOS
const { TableRepository, UserRepository } = require('../repositories');
//SERVICIOS
const { UserService } = require('../services')
//CONTROLLERS
const { UserController } = require('../controllers')
//ROUTES
const { UserRoutes } = require('../routes/index.route');
const routes = require('../routes');
//CONF
const config = require('../conf');
//STARTER
let app = require('.');

let container = createContainer();

container.register({
    app: asClass(app).singleton(),
    routes: asFunction(routes),
    config: asValue(config)
}).register({
    UserRoutes: asFunction(UserRoutes)
}).register({
    UserService: asClass(UserService).singleton()
}).register({
    UserController: asClass(UserController.bind(UserController)).singleton()
}).register({
    Register: asValue(Register),
    Table: asValue(Table),
    Player: asValue(Player),
    Piece: asValue(Piece),
    User: asValue(User)
}).register({
    UserRepository: asClass(UserRepository).singleton(),
    TableRepository: asClass(TableRepository).singleton()
});

module.exports = container;