'use strict'

const nano = require('nano')("http://jobsweetla:SabioPass1!@localhost:5984")
const Q = require('q');
nano.db.create('books');
const books = nano.db.use('books');
module.exports = homeService;

function homeService() {
    return {
        getAll: getAll
        ,insert:insert
    }


function getAll() {
    var deferred = Q.defer();
       books.list(function (err, body) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(body);
        }
      })
      return deferred.promise;
};

function insert() {
    books.insert({ name: 'The Art of war' }, null, function (err, body) {
        if (err) {
          return err;
        } else {
          return body;
        }
      })
}
};