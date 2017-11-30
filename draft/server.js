// // Get the packages we need
var express = require('express');
//     router = express.Router(),
//     mongoose = require('mongoose'),
//     secrets = require('./config/secrets'),
//     bodyParser = require('body-parser'),
//     users = require('./models/user'),
//     tasks = require('./models/task');

// // Create our Express application
var app = express();

// // Use environment defined port or 3000
var port = process.env.PORT || 8000;

// // Connect to a MongoDB
// mongoose.connect(secrets.mongo_connection, { useMongoClient: true});

// // Allow CORS so that backend and frontend could be put on different servers
// var allowCrossDomain = function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
//     next();
// };
// app.use(allowCrossDomain);

// // Use the body-parser package in our application
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());

// // Use routes as a module (see index.js)
// require('./routes')(app, router);

// //simple test on setup
app.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// // Start the server
app.listen(port,()=>{
    console.log('Server running on port ' + port);
});