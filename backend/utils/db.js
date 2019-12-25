const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'qlbh'
});


module.exports = {
    load: sql => {
        return new Promise (
            function(done, fail) {
                connection.connect();
                connection.query(sql, function(error, result, fields) {
                    if (error) fail(error);
                    else done(result);
                    fn_done(result);
                    connection.end();
                });
            }

        );
    }


    // load: (sql, fn_done) => {
    //     connection.connect();
    //     connection.query(sql, function(error, result, fields) {
    //         if(error) throw error;
    //         fn_done(result);
    //         connection.end();
    //     });
    // }
}
