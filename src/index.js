require('dotenv').config();

const app = require('./server');
require('./database');


app.listen(app.get('port'), () => {
    console.log(`Connected to port: ${app.get('port')}`);

});

