const { Router } = require('express');
const router = Router();
const { renderSignUp, signUp, renderSignIn, account, signIn, accountUpdate, logOut } = require('../controllers/users.controllers');
// const { accountEvents } = require('../helpers/events');


router.get('/users/signup', renderSignUp);
router.post('/users/signup', signUp);

router.get('/users/signin', renderSignIn);
router.post('/users/signin', signIn);

router.get('/users/account', account)
router.post('/users/accountUpdate', accountUpdate)
router.post('/users/logout', logOut);


module.exports = router;