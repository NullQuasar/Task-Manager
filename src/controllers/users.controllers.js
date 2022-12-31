const Users = require('../models/User');
const passport = require('passport');
const userCtrls = {};

userCtrls.renderSignUp = (req, res) => {
    res.render('users/signup');
};


userCtrls.signUp = async (req, res) => {
    const errors = [];
    console.log(req.body);

    const { name, email, passw, passw_confirm } = req.body;
    if (passw != passw_confirm) {
        errors.push({error: 'The passwords do not match.'});
    }
    if (passw.length < 6) {
        errors.push({error: 'The password must be at least 6 characters long.'});
    }

    if (errors.length) {
        console.log(errors);
        res.render('users/signup', { 
            errors,
            name,
            email,
            passw
        });
    } else {
        const userEmail = await Users.findOne({ email: email.toLowerCase() });
        if (userEmail) {
            const danger_msg = 'The user already exists.';
            res.render('users/signup', { danger_msg, name, email, passw });
            
        } else {
            const newUser = new Users({ username: name, email, passw });
            newUser.passw = await newUser.passwEncrypt(passw);
            await newUser.save();
            req.flash('success_msg', `Welcome <${name}>!`)
            res.redirect('/');
        }
    }
};


userCtrls.renderSignIn = (req, res) => {
    res.render('users/signin');
};


userCtrls.account = (req, res) => {
    console.log(req.user);
    res.render('users/account', { user: req.user });
};


// Not needed, already implemented in config/passport.js
// userCtrls.signIn = async (req, res) => {
//     console.log(req.body);

//     const { email, passw } = req.body;
//     const user = await Users.findOne({ email: email.toLowerCase() });
    
//     if (user) {
//         if (await user.passwAuth(passw)) {
//             req.flash('success_msg', `Welcome back <${user.username}>!`);
//             res.redirect('/');
//         } else {
//             req.flash('error_msg', 'Wrong password, please try again.');
//             res.redirect('/users/signin');
//         }
//     } else {
//         req.flash('error_msg', 'We could not find your account.\nAre you already registered?.');
//         res.redirect('/users/signin');
//     };
// };

userCtrls.signIn = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/',
    failureFlash: true
});


userCtrls.logOut = (req, res) => {
    req.logout();
    req.flash('success_msg', 'Succesfully logged out.');
    res.redirect('/users/signin');
};


userCtrls.accountUpdate = async (req, res) => {
    // ... Update user info    
    const user = await Users.findOne({ email: req.user.email.toLowerCase() });

    if(await user.passwAuth(req.body.passw)) {
        if(req.body.new_passw)
            req.body.passw = await user.passwEncrypt(req.body.new_passw);
        else delete req.body.passw
        delete req.body.new_passw

        await user.update(req.body);

        req.flash('success_msg', 'Updated!');
    } 
    res.redirect('/users/account');
};

module.exports = userCtrls;