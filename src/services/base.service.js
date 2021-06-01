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
        
        let user = await this.repository.get(id); 
        
        if(!user){
            let error = new Error();
            error.status = 404;
            error.message = 'User not found';
            throw error;
        }
        return user;
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