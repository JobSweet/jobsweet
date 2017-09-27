// modules =================================================
const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')
const bodyParser = require('body-parser')

// configuration ===========================================

// set our port
const port = process.env.PORT || 8080

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

;(function() {
    const mongoose = require('mongoose')
    mongoose.Promise = global.Promise
    mongoose.set('debug', true)
    //mongoose.connect(process.env.MONGODB_URL)
    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Mongoose default connection disconnected through app termination')
            process.exit(0)
        })
    })
})()

// routes ==================================================
// app.use(require('./server/routes'))
app.use(
    "/",
    express.static(path.join(__dirname, "../client"), {
        fallthrough: false
    })
);

// start app ===============================================
app.listen(port, () => {
    console.log(`Magic happens on port: ${port}`)
})
