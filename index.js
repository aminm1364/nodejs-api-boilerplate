const {logger} = require('./middlewares/error');
const config = require('config');
const express = require('express');

const app = express();
var pug = require('pug');

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/middlewares')(app, express);
require('./startup/db')(config);
require('./startup/config')(config,logger);
require('./startup/validation')();

// async function run(){
//     const p = Promise.reject(new Error("hahahahaha!"));
//     await p;
// };
// run();

throw new Error('This is a new Error!');

const port = config.get('app_port') || 3000;  
app.listen(port, () => {
    logger.info(`Listening on port ${port}...`);
});