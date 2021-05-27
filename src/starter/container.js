const {asClass, asFunction, asValue, createContainer} = require('awilix');
const { Table, Register, Player, Piece } = require('../models');
const {TableRepository} = require('../repositories'); 

let app = require('.');
let container = createContainer();

container.register({
    app: asClass(app).singleton()
}).register({
    Register: asClass(Register).singleton(),
    Table: asClass(Table).singleton(),
    Player: asClass(Player).singleton(),
    Piece: asClass(Piece).singleton()
}).register({
    TableRepository: asClass(TableRepository).singleton()
})

module.exports = container;