class BaseRepository {
    
    constructor(model){
        this.model = model;
    }

    async get(id){
        return this.model.findById(id);
    }

    async getAll(){
        return this.model.find();
    }

    async create(){

    }


}
module.exports = BaseRepository;