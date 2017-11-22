'use strict'

const nano = require('nano')("http://jobsweetla:SabioPass1!@localhost:5984")
const Q = require('q');
const users = nano.db.use('users');
module.exports = usersService;

function usersService() {
    return {
        getAll: getAll
        , insert: insert
        , update: update
        , remove: remove
    }


    function getAll() {
        var deferred = Q.defer();

        users.list({include_docs: true},function (err, body) {
            if (err) {
                deferred.reject(new Error(err));
            } else {
                deferred.resolve(body.rows);
                
            }
        })
        return deferred.promise;
    };

    function insert(document) {
        var deferred = Q.defer();

        users.insert(document, null, function (err, body) {
            if (err) {
                deferred.reject(new Error(err));
            } else {
                deferred.resolve(body);
            }
        })
        return deferred.promise;
    }
    function update(document) {s
        var deferred = Q.defer();
        users.insert(document, function(err, body) {
            if (!err){
                deferred.reject(new Error(err));
            
        } else {
            deferred.resolve(body);
        }
          })
        return deferred.promise;
    }

    function remove(queryCondition) {
        var deferred = Q.defer();
        users.destroy(queryCondition._id, queryCondition._rev, function (err, body) {
            if (err) {
                deferred.reject(new Error(err));
            } else {
                deferred.resolve(body);
            }
        })
        return deferred.promise;
    }
};