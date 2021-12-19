const path = require('path');
const { engine } = require('express-handlebars');
const express = require("express");
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');

// --------------------------------------------------------------------------------------------------------------

// Dev modules
const morgan = require('morgan');



// Init app
const app = express();


// Config
app.set('port', process.env.port || 4000);
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', engine({
    defaultLayout: 'default',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs')


//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());


// Global Vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.danger_msg = req.flash('danger_msg');
    next();
}) 


// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/tasks.routes'));

// Static
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
