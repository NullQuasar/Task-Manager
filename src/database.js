const mongoose = require('mongoose');

// const MONGODB_URI = `mongodb+srv://${process.env.username}:${process.env.password}@cluster0.imac7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const { MONGODB_HOST, MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`;

mongoose
    .connect(MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,

    })
    .then( (db) => console.log('Connection established with the Database'))
    .catch( (err) => console.log('An error has occurred: ', err))
    ;


