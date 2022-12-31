const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'passw'
}, async (email, passw, done) => {
    const user = await Users.findOne({ email: email.toLowerCase() });

    if (!user)
        return done(null, false, { message: 'We could not find your account.\nAre you already registered?.' });
    else {
        if (await user.passwAuth(passw))
            return done(null, user);
        else
            return done(null, false, { message: 'Wrong password, please try again.' });
    }
}));


passport.serializeUser((user, done) => {
    // done(null, user.id);
    Users.findById(user._id, function(err, user) {
        done(err, user);
    })
});


passport.deserializeUser((id, done) => {
    Users.findById(id, (err, user) => {
        done(err, user);
    }).lean();
});