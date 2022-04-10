const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cons = require('consolidate');
const dust = require('dustjs-helpers');
const pg = require('pg');
const app = express();


// DB Connection String
const connect = "postgres://demo_user:123456@localhost/recipes";

// Assign Dust Engine to .dust files
app.engine('dust', cons.dust);

// Set Default Extension .dust
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.render('index')
})

// Server
app.listen(3000, function() {
    console.log('Server Started on Port 3000')
})