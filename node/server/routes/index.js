'use strict';

const router = require('express').Router();
const usersRoutes = require('./users.routes');
const sitesRoutes = require('./sites.routes');

router.use('/api/users', usersRoutes);
router.use('/api/*', (req, res, next) => {
    res.sendStatus(404);
})
router.use(sitesRoutes);

router.use((err, req, res, next) => {
    console.error(err.stack);

    res.sendStatus(500);
});

module.exports = router;