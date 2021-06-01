const express = require('express');

let _express = null
let _config = null
class Server  {
    constructor({config,routes}){
        _config = config;
        _express = express().use(routes);
    }

    start(){
        return new Promise((resolve,reject)=>{
            _express.listen(_config.PORT,(err)=>{
                //if(err) throw reject(err);
                console.log('# Cheess server is running');
            });
            resolve();
        })
    }   
}

module.exports = Server;