const express = require('express');
const mysql = require('mysql');

const router = express.Router();

router.get('/', function(req, res){
    // const list = [
    //     {CatID: 1, CatName: 'Laptop'},
    //     {CatID: 2, CatName: 'Smartphone'},
    //     {CatID: 3, CatName: 'Tablet'},
    //     {CatID: 4, CatName: 'Clothes'},
    //     {CatID: 5, CatName: 'Sneakers'},
    //     {CatID: 6, CatName: 'Jewels'},

    // ]
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 8889,
        user: 'root',
        password: 'root',
        database: 'qlbh'
    });

    connection.connect();
    connection.query('select * from categories', function(error, result, fields){
        if(error) throw error;
        res.render(`vwCategories/index`, {
        categories: result,
        empty: result.length === 0
        });
        connection.end();
    });
})

router.get('/add', function(req, res){
    res.render(`vwCategories/add`);

})

module.exports = router;

