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

    async create(entity){
        return this.model.create(entity);
    }

    
    async update(id, entity){
        return await this.model.findByIdAndUpdate(id, entity, {new: true});
    }

    /**
     *   *** Restricted Function
     */
    async delete(id){
        await this.model.findByIdAndDelete(id);
        return true;
    }

}
module.exports = BaseRepository;