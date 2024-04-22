const home = require('../routes/home');
const error = require('../middlewares/error');

module.exports = function(app){
    app.use('/', home);
    app.use(error);
}
