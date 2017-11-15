'use strict'

const router = require('express').Router();

const homeController = require('../controllers/home.controller')();

module.exports = router;

router.post('/books', homeController.getAll);
router.insert('/books', homeController.insert);