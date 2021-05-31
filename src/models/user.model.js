const mongoose = require('mongoose');
const muv = require('mongoose-unique-validator');
const { compareSync, hashSync, genSaltSync } = require('bcryptjs');

let role_options = {
    values: ['ROLE_ADMIN','ROLE_USER','ROLE_MODERATOR'],
    message: '{VALUES} no es un rol valido'
};

const UserSchema = mongoose.Schema({
    name: { 
        type: String,
        required: [true, 'El usuario es necesario']
    },
    email: {
        type: String,
        required: [true, 'El email es necesario']
    },
    username: {
        type: String,
        required: [true, 'El usuario es necesario'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesaria']
    },
    img: {
        type: String
    },
    role: {
        type: String,
        default: 'ROLE_USER',
        enum: role_options,
        required: [true, 'El rol es necesario']
    },
    status: {
        type: Boolean,
        default: true,
        required: [true, 'El estado es necesario']
    },
});

UserSchema.methods.comparePassword = function (pass) {
    return compareSync(pass, this.password);
}

UserSchema.methods.toJSON = function () {
    let obj = this
    delete obj.password;
    return obj;
}

UserSchema.pre('save', async function(next){
    const user = this;
    if(!user.isModified("password")){
        next()
    }
    const salt = genSaltSync(10);
    const hashPassword = hashSync(user.password,salt);
    user.password = hashPassword;
    next();
});

UserSchema.plugin(muv);

module.exports = mongoose.model('user', UserSchema);