const express = require('express');
const app = express();
/*
    Step 1: Above code is for bringing in Express
    Step 2: The Below code is for bringing in mongo database connection to app.js
*/
const mongoose = require('./database/mongoose');
/*
app.listen(3000, function(){
    console.log("Server started on port 3000");
});

    The above and below code work the same as the below one
    The below is a new way of using a function called lambda function(or arrow method)

    Step 3: Server connection
*/

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
