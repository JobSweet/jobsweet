'use strict'

const usersService = require('../services/users.service')();
const request = require('request');

module.exports = usersController;

function usersController() {
    return {
        getAll: getAll
        , insert: insert
        , update: update
        , remove: remove
    }

    function getAll(req, res) {
        usersService.getAll()
            .then((response) => {
                return res.json(response);
            })
            .catch((err) => {
                return res.status(500).send(err);
            });
    }

    function insert(req, res) {
        usersService.insert(req.body)
            .then((response) => {
                return res.status(201).json(response);

            })
            .catch((err) => {
                return res.status(500).send(err)
            })
    }
    function update(req, res) {
        usersService.update(req.body)
            .then((response) => {
                return res.status(201).json(response);

            })
            .catch((err) => {
                return res.status(500).send(err)
            })
    }
    function remove(req, res) {
        let query = {
            _id: req.params.id
            , _rev: req.params.rev
        }
        usersService.remove(query)
            .then((response) => {
                return res.status(201).json(response);

            })
            .catch((err) => {
                return res.status(500).send(err)
            })
    }
};
