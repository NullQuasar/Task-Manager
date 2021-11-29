const path = require('path');
const { engine } = require('express-handlebars');

const express = require("express");
// const { setRandomFallback } = require('bcryptjs');
// const { RSA_NO_PADDING } = require('constants');

// Init app
const app = express();

// Global Vars


// Config
app.set('port', process.env.port || 4000);
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', engine({
    defaultLayout: 'default',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


//Middlewares
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/index.routes'));

// Static
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
