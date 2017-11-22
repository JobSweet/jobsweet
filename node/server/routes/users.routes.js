'use strict'

const router = require('express').Router();

const usersController = require('../controllers/users.controller')();

module.exports = router;

router.get('/', usersController.getAll);
router.post('/', usersController.insert);
router.put('/', usersController.update);
router.delete('/:id/:rev', usersController.remove);