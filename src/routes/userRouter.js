const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const validator = require('../validations/registerValidator');

/* Get - Form */ 
router.get('/', controller.index);

/* Post - Send data */ 
router.post('/', validator, controller.processRegister);

/* Get - Confirm */ 
router.get('/confirm', controller.confirm);

/* Get - Olvidar */ 
router.get('/olvidar', controller.olvidar);

module.exports = router;