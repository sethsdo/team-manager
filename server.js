"use strict"

const express = require('express')
const path = require("path")
const app = express()
const bodyParser = require('body-parser');
const session = require('express-session');
const Promise = require('promise');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'expresspasskey' }));

app.use(express.static(path.join(__dirname, '/client/dist')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.use(bodyParser.urlencoded({ extends: true }));
app.use(bodyParser.json());


app.listen(8080, function () {
    console.log("listening on port 8080");
})
