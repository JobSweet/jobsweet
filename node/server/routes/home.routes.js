'use strict'

const router = require('express').Router();

const homeController = require('../controllers/home.controller')();

module.exports = router;

router.get('/', homeController.getAll);
router.post('/', homeController.insert);