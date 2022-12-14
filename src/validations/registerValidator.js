const {check} = require('express-validator');

module.exports = [
    check('nombre').notEmpty().withMessage('Campo requerido'),
    check('color').notEmpty().withMessage('Campo requerido'),
    check('email').notEmpty().isEmail().withMessage('Campo requerido').bail().withMessage('Email invalido'),
];

