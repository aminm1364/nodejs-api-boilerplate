const mongoose = require('mongoose');
const {logger} = require('../middlewares/error');

module.exports = function(config) {
    const debugServerAddress = `${config.get('debug-server')}:${config.get('debug-server-port')}`;
    mongoose.connect(`mongodb://${debugServerAddress}/${config.get('db_name')}`)
        .then(() => logger.info('Connected to MongoDb...'));
}