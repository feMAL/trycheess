const {Router} = require('express');
const cors = require('cors');

module.exports = function () {
    let app = Router();
    
    app.use(express.json());
    app.use(cors());
    app.use(express.static(path.resolve(__dirname, '../../public')));

}
