const container = require('./src/starter/container');
const Server = container.resolve("app");

Server.start();