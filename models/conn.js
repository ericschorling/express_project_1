const { use } = require('../routes');

const host = "lallah.db.elephantsql.com ",
    user = "ihlotdct",
    database = "ihlotdct",
    password= "fU5g-UvFY1c9YoNaT6lk9P4SMxFZEI9L";

const pgp = require('pg-promise')({
    query: function (e) {
        console.log("QUERY: ", e.query)
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password
}

const db = pgp(options)

module.exports = db;