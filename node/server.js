'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const methodOverride = require('method-override');
const validator = require('validator');

require('dotenv').config();
const mongoConnection = process.env.MONGODB_URL;

//const port = process.env.PORT;
const port = 8080;



app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(expressValidator());
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(require('./server/config/static.files'));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendStatus(404);
})

app.use(require('./server/routes'));

app.listen(port, () => {
    console.log(`Magic happens on port: ${port}`);
});