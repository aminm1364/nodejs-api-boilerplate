module.exports = function (config, logger){
    if(!config.get('jwtPrivateKey')) {
        logger.error('<jwtPrivateKey> is not defined.');
        process.exit(1);
    } 
}