let rows = null;
let columns = null;
let register = '';

const FILES = ['1','2','3','4','5','6','7','8'];
const RACKS = ['a','b','c','d','e','f','g','h'];

class TableRepository {

    constructor({Table}){
        this.default();
    }


    async move(piece, position){
        let res = false;
        
        return res;
    }

    async default(){
        let res = false;
        
        rows = ['1', '2', '3', '4', '5', '6', '7', '8'];
        columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

        return res;
    }

}
module.exports = TableRepository;