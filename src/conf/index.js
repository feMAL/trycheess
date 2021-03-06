if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.SERVER_PORT,
    MONGO_URI: process.env.MONGO_URI,
    APP_NAME: process.env.APP_NAME,
    JWT_SECRET: process.env.JWT_SECRET
}