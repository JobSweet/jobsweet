// modules =================================================
const express = require('express');
const app = express();
require('dotenv').config();
const sessionStore = process.env.SESSION_STORE;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const path = require('path');
const expressValidator = require('express-validator');
const cronJobs = require('./app/services/cronJobs.service')();

app.use(require('./app/config/static.files'))

// Handle Static File 404
app.use(function(err, req, res, next) {
    if (err) console.error
    res.sendStatus(404)
});

// configuration ===========================================
// set our port
const port = process.env.PORT || 8080;
// mpromise is depreciated, use native es6 Promise
mongoose.Promise = global.Promise;
// connect to mongoDB database
mongoose.connect(process.env.MONGODB_URL);

// If the Node process ends, close the Mongoose connection
// see: http://theholmesoffice.com/mongoose-connection-best-practice/
process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose default connection disconnected through app termination')
        process.exit(0)
    })
});

require('./app/config/passport')(passport); // pass passport for configuration

// cookie parser
app.use(cookieParser());

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());
app.use(expressValidator());
// parse application/vnd.api+json as json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// passport and mongo-connect config
if (sessionStore === "mongo") {
    app.use(session({
        secret: process.env.PASSPORT_SESSION_SECRET || 'abc1234', // session secret
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({mongooseConnection: mongoose.connection})
    }));
} else {
    app.use(session({
        secret: process.env.PASSPORT_SESSION_SECRET || 'abc1234', // session secret
        resave: false,
        saveUninitialized: true
    }));
}
app.use(passport.initialize());
app.use(passport.session());

// cron jobs
cronJobs.monthlyInvoices();
//cronJobs.tenSecondTester();

// routes ==================================================
app.use(require('./app/routes'));

// start app ===============================================
app.listen(port, () => {
    console.log(`Magic happens on port: ${port}`);
});