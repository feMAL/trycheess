const {asClass, asFunction, asValue, createContainer} = require('awilix');
//MODELS
const { Table, Register, Player, Piece } = require('../models');
//REPOS
const {TableRepository} = require('../repositories'); 
//ROUTES
const routes = require('../routes');
//CONF
const conf = require('../conf');
//STARTER
let app = require('.');

let container = createContainer();

container.register({
    app: asClass(app).singleton(),
    routes: asFunction(routes),
    config: asValue(config)
}).register({
    Register: asClass(Register).singleton(),
    Table: asClass(Table).singleton(),
    Player: asClass(Player).singleton(),
    Piece: asClass(Piece).singleton()
}).register({
    TableRepository: asClass(TableRepository).singleton()
})

module.exports = container;