'use strict';

const router = require('express').Router();

const sitesRoutes = require('./sites.routes');

router.use('/api/*', (req, res, next) => {
    res.sendStatus(404);
})

router.use(sitesRoutes);

router.use((err, req, res, next) => {
    console.error(err.stack);

    res.sendStatus(500);
});

module.exports = router;