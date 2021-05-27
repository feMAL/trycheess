let _name = null;
let _color = null;
let _status = null;

class Player {

    constructor(name){
        _name = name;
    }

    async setStatus(status){
        _status = status;
    }
    
    async setColor(color){
        _color = color;
    }
}

module.exports = Player;