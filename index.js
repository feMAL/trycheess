const container = require('./src/starter/container');
const Server = container.resolve("app");
const { MONGO_URI } = container.resolve('config')
const mongoose = require('mongoose')


mongoose.set('useCreateIndex', true);

mongoose.connect(MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true
},(err) => {
    if(err) throw console.log(err);
    console.log('# MongoDB database is running');
    Server.start();
});