let _table = null;
let _player = null;
class Cheess{
    
    constructor({Table, Player}){
        _player = Player;
    }
    
    async createPlay(){
    }

    async run(){
        console.log('#   Malgor Chess 0.1');
        console.log('[-] Ingrese Nombre Del Jugador');
        let stdin = process.openStdin();
        let prueba = new _player()
        
    }
}
module.exports = Cheess;