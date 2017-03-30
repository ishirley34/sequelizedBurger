// Imports the connection.js
var connection = require('./connection.js');

// queries for exporting the objects
module.exports = {
    
    // Selects all from the table and the callback
    selectAll: function(table, res, callback) {
        // query string
        var queryString = "SELECT * FROM ??";

        // Runs the queryString and passes the values
        connection.query(queryString, [table], function(err, result) {
            // Kills the program and throws an error if there is one
            if(err) throw err;

            //  runs the callback function
            callback(result, res);
        });
    },
    // runs an insert query by taking the table name, columns and values, res from the ajax request and callback
    insertOne: function(table, columns, values, res, callback) {

        var queryString = "INSERT INTO ?? (??) VALUES (?)";

        // runs the queryString and passes the table and column names into ??s and valus into ?
        connection.query(queryString, [table, columns, values], function(err, result) {
            if (err) throw err;

            callback(res);
        });
    },
    // runs an update query 
    updateOne: function(table, setClause, whereClause, res, callback) {
        var queryString = "UPDATE ?? SET ? WHERE ?";

        //  runs the string and passes table name and other clauses into ??, ?

        connection.query(queryString, [table, setClause, whereClause], function(err, result) {
            if (err) throw err;

            callback(res);
        });
    }
};