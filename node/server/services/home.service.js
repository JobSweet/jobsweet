'use strict'

const nano = require('nano')('http://localhost:5984')
nano.db.create('books');
const books = nano.db.use('books');

function homeService() {
    return {
        getAll: getAll
    }
};


function getAll() {
    books.list(function (err, body) {
        if (err) {
          console.log(err)
        } else {
          console.log(body.rows)
        }
      })
};

function insert() {
    books.insert({ name: 'The Art of war' }, null, function (err, body) {
        if (err) {
          console.log(err)
        } else {
          console.log(body)
        }
      })
}