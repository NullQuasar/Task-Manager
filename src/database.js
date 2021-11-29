const mongoose = require('mongoose');

// const MONGODB_URI = `mongodb+srv://${process.env.username}:${process.env.password}@cluster0.imac7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const { MONGODB_HOST, MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`;

(async () => {
    try {
        const db = await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongodb is connected to", db.connection.host);
    } catch (error) {
        console.error(error);
    }
})();