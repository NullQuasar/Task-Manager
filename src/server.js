const path = require('path');
const { engine } = require('express-handlebars');

const morgan = require('morgan');

const express = require("express");
// const { setRandomFallback } = require('bcryptjs');
// const { RSA_NO_PADDING } = require('constants');

const methodOverride = require('method-override');

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
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/tasks.routes'));

// Static
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
