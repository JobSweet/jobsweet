'use strict';

const router = require('express').Router();

const itemRoutes = require('./items.routes');

const homeRoutes = require('./home.routes');

const sitesRoutes = require('./sites.routes');

router.use('/api/items', itemRoutes);

router.use('/api/events', homeRoutes);

router.use('/api/*', (req, res, next) => {
    res.sendStatus(404);
})

router.use(sitesRoutes);

router.use((err, req, res, next) => {
    console.error(err.stack);

    res.sendStatus(500);
});

module.exports = router;