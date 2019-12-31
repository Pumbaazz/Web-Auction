const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'qlbh'
});

const pool_query = util.promisify(pool.query).bind(pool);



module.exports = {
    load: sql => pool_query(sql),
    add: (entity, table) = pool_query('insert into ? set ?', [table, entity])
    // load: sql => {
    //     return new Promise (
    //         function(done, fail) {
    //             pool.query(sql, function(error, result, fields) {
    //                 if (error) fail(error);
    //                 else done(result);
                   
    //                 connection.end();
    //             });
    //         }

    //     );
    // }
}
