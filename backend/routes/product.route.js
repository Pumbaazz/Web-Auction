const express = require('express');
const db = require('../utils/db')
const mysql = require('mysql');
const router = express.Router();

router.get('/', async function(req, res) {
    const results = await db.load('select * from products');
    res.render(`vwProducts/index`, {
        products: results,
        empty: results.length === 0
    })


   // const p = db.load('select * from products');
    // p
    //     .then(results => {
    //         res.render(`vwProducts/index`, {
    //             products: results,
    //             empty: results.length === 0
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.send(`ERROR`);


    //     });
    // const p = new Promise();
    // const data = await p;

    // db.load('select * from products', function(results) {
    //     res.render(`vwProducts/index`, {
    //         products: results,
    //         empty: results.length === 0
    //     });
    // });
})

module.exports = router;
