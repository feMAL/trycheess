const {asClass, asFunction, asValue, createContainer} = require('awilix');
//MODELS
const { Table, Register, Player, Piece, User } = require('../models');
//REPOS
const { TableRepository, UserRepository } = require('../repositories');
//SERVICIOS
const { UserService, AuthService } = require('../services')
//CONTROLLERS
const { UserController, AuthController } = require('../controllers')
//ROUTES
const { UserRoutes, AuthRoutes } = require('../routes/index.route');
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
    UserRoutes: asFunction(UserRoutes),
    AuthRoutes: asFunction(AuthRoutes)
}).register({
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton()
}).register({
    UserController: asClass(UserController.bind(UserController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton()
}).register({
    User: asValue(User),
    Register: asValue(Register),
    Table: asValue(Table),
    Player: asValue(Player),
    Piece: asValue(Piece),
}).register({
    UserRepository: asClass(UserRepository).singleton(),
    TableRepository: asClass(TableRepository).singleton()
});

module.exports = container;