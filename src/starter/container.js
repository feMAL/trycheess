const { asClass, asFunction, asValue, createContainer } = require('awilix');
//MODELS
const { Board, Register, Player, Piece, User, Room } = require('../models');
//REPOS
const { BoardRepository, UserRepository } = require('../repositories');
//SERVICIOS
const { UserService, AuthService, BoardService } = require('../services');
//CONTROLLERS
const { UserController, AuthController, BoardController } = require('../controllers');
//ROUTES
const { UserRoutes, AuthRoutes, BoardRoutes } = require('../routes/index.route');
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
    AuthRoutes: asFunction(AuthRoutes),
    BoardRoutes: asFunction(BoardRoutes)
}).register({
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton(),
    BoardService: asClass(BoardService).singleton()
}).register({
    UserController: asClass(UserController.bind(UserController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    BoardController: asClass(BoardController.bind(BoardController)).singleton()
}).register({
    User: asValue(User),
    Register: asValue(Register),
    Board: asValue(Board),
    Player: asValue(Player),
    Piece: asValue(Piece),
    Room: asValue(Room)
}).register({
    UserRepository: asClass(UserRepository).singleton(),
    BoardRepository: asClass(BoardRepository).singleton()
});

module.exports = container;