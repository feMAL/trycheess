class BaseService {

    constructor(repository){
        this.repository = repository;
    }

    async get(id){
        if(!id){
            let error = new Error();
            error.status = 400;
            error.message = 'Error en el ID de la consulta';
            throw error;
        }
        
        let object = await this.repository.get(id); 
        
        if(!object){
            let error = new Error();
            error.status = 404;
            error.message = 'Object not found';
            throw error;
        }
        return object;
    }

    async getAll(){
        return await this.repository.getAll();
    }

    async create(entity){
        return await this.repository.create(entity);
    }

    async update (id, entity){
        if(!id){
            let error = new Error();
            error.status = 400;
            error.message = 'Error en el ID de la consulta';
            throw error;
        }
        return await this.repository.update(id,entity);
    }
    async delete(id){
        if(!id){
            let error = new Error();
            error.status = 400;
            error.message = 'Error en el ID de la consulta';
            throw error;
        }
        return await this.repository.delete(id);
    }
}

module.exports = BaseService;