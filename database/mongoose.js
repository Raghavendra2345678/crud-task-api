const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb', )
    .then(() => {console.log("DB Connected Sucessfully!")})
    .catch((error) => {console.log(error)});

/* 
1. Okay! so the above block of code had a mongoose import
2. then it had to change the promise parameter
3. and then we are trying to connect to our mongodb server and acknowledging
    server connection through ".then" and error handling
    through ".catch"😁
*/

module.exports = mongoose;