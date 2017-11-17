'use strict'

const homeService = require('../services/home.service')();
const request = require('request');

module.exports = homeController;

function homeController () {
    return {
            getAll: getAll
            , insert: insert
    }

    function getAll(req, res) {
         homeService.getAll() 
            .then((response)=>{
                return res.json(response);            
            })
            .catch((err)=> {
                return res.status(500).send(err);
            });
    }

    function insert(req, res) {
        homeService.insert(req.body)
            .then((response)=>{
                return res.status(201).json(response);

            })
            .catch((err)=>{
                return res.status(500).send(err)
            })
    }
};
    