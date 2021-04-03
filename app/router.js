const express = require('express');

const router = express.Router();

const mainController = require ('./controllers/mainController');
const authController = require ('./controllers/authController');


router.get('/', mainController.homepage);

router.get('/signup', mainController.signupPage);
router.post('/signup', authController.signup);

router.get('/signin', mainController.signinPage);
router.post('/signin', authController.signin);

//router.get('/pokemon/:id', mainController.pokemon);



module.exports = router;