const app = require('./server');


app.listen(app.get('port'), () => {
    console.log(`Connected to port: ${app.get('port')}`);

});

