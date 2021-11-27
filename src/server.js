const path = require('path');

const express = require("express");
// const { setRandomFallback } = require('bcryptjs');
// const { RSA_NO_PADDING } = require('constants');

// Init app
const app = express();

// Global Vars


// Config
app.set('port', process.env.port || 4000);
app.set('views', path.join(__dirname, 'views'));


//Middlewares
app.use(express.urlencoded({extended: false}));


// Static
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.get('/', (req, res) => {
    console.log('Initialized main route (/)');
    res.send('Hello user!');
})


module.exports = app;
