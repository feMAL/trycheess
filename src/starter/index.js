const express = require('express');

let _express = null
let _config = null
class Server  {
    constructor({config,route}){
        _express = express().use(route);
        _config = config;
    }

    start(){
        return new Promise((resolve,reject)=>{
            _express.listen(_config.PORT,(err)=>{
                if(err) throw reject(err);
                console.log('Cheess Server Running');
            });
            resolve();
        })
    }   
}

module.exports = Server;