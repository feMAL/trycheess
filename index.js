const container = require('./src/starter/container');
const Server = container.resolve("app");
const { MONGO_URI } = container.resolve('config')
const mongoose = require('mongoose')


mongoose.set('useCreateIndex', true);

mongoose.connect(MONGO_URI, {
    useNewUrlParser:true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('# MongoDB database is running');
    Server.start();   
}).catch((err) => {
    if(err) throw console.log(err);
});