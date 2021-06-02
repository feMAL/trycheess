module.exports = function (req,res,next) {
    let { role } = req.user;
    console.log(req.user);
    if(role != 'ROLE_ADMIN'){
        let error = new Error();
        error.status = 403
        error.message = 'Acceso no permitido';
        throw error;
    }
    next();
}