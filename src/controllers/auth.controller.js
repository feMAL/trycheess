let _authService = null;
class AuthController {
    constructor ({AuthService}){
        _authService = AuthService;
    }

    async singup(req,res){
        console.log('# POST - /singup - Crear usuario')
        const user = req.body;
        const { name, username, email, password, role } = user;

        if( !name || !username || !email || !password || !role ) return res.status(400).send({ok: false, message: 'Alguno de los datos obligatorios no han sido enviados'});
        
        user.role = 'ROLE_USER';
        user.status = true;
        let new_user = await _authService.singup(user);
        return res.status(200).send({ ok: true, user_created: new_user });
    }

    async singin(req,res){
        console.log('# POST - /singin - Logearse en la app')
        let credentials = req.body;
        let { username, password } = credentials;

        if(!username || !password) return res.status(400).send({ok: false, message: 'No ha enviado las credenciales' })
        
        let token = await _authService.singin(credentials);
        return res.status(200).send({ok:true , token});
    }
}
module.exports = AuthController;