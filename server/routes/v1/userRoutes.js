const express = require('express');
const { signup, signin, activateAccount, resendCode, googleSignin, getSingleUser } = require('../../controllers/userController.js');
const userAuthorize = require('../../middlewares/userAuthorize');
const router = express.Router();


// <!-- User Auth -->
router.route('/register').post(signup);
router.route('/activate-account').post(activateAccount);
router.route('/resend-code').post(resendCode);
router.route('/sign-in').post(signin);
router.route('/google-sign-in').post(googleSignin);

// <!-- Get single user -->
router.route('/single').get(userAuthorize, getSingleUser);

module.exports = router;