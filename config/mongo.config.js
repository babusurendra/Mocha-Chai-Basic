const mongoose = require('mongoose');
let config = require('config');
// process.env.NODE_ENV = 'test';
if(config.util.getEnv('NODE_ENV') != 'test'){
    db_URI = '';
}
else{
    
    db_URI = 'mongodb://user:user@ds111565.mlab.com:11565/userstest';
}
//console.log(db_URI);
mongoose.Promise = global.Promise;
mongoose.connect(db_URI);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('connection',()=>{
  require('../models/booksModel');
})
//don't show the log when it is test
// if(process.env.NODE_ENV !== 'test') {
//     //use morgan to log at command line
//     app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
// }