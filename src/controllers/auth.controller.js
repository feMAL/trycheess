let _authService = null;
class AuthController {
    constructor ({AuthService}){
        _authService = AuthService;
    }

    async singup(req,res){
        
        console.log('# POST - /singup - Crear usuario');
        
        try {
            const user = req.body;
            
            const { name, username, email, password, role } = user;
    
            if( !name || !username || !email || !password || !role ) return res.status(400).send({ok: false, message: 'Alguno de los datos obligatorios no han sido enviados'});
            
            user.role = 'ROLE_USER';
            user.status = true;
            
            let new_user = await _authService.singup(user);
            
            return res.send(new_user._doc);

        }catch(e){
            return res.send(e);
        }
    }

    async singin(req,res){
        console.log('# POST - /singin - Logearse en la app');
        try {
            let credentials = req.body;
            let { username, password } = credentials;
            
            if(!username || !password) return res.status(400).send({ok: false, message: 'No ha enviado las credenciales' })
            
            let cred = await _authService.singin(credentials);
            return res.status(200).send({token: cred.token, user: cred.user._doc});
        }catch(e){
            return res.send(e);
        }
    }

    async elevatePrivileges(req,res){
        console.log('# GET - /:id/:role - Elevar privilegios de un usuario');
        const {idToElevate, roleToChange} = req.params;

        if(!idToElevate) return res.status(400).send({ok: false, message: 'No ha enviado la consulta correctamente'});

        const status = await _authService.elevatePrivileges(idToElevate, roleToChange);

        return res.status(200).send({operation: status, message:'Ha cambiado sus privilegios exitosamente'});
    }

}
module.exports = AuthController;