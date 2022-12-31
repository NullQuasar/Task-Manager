function isAuthenticated (req, res, next) {
    if (req.isAuthenticated())
        return next();
        
    req.flash('error_msg', 'You must be logged in first to do this!');
    res.redirect('/users/signin');
}

module.exports = isAuthenticated;