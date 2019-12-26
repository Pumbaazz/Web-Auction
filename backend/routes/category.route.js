const express = require('express');
const db = require('../utils/db')

const router = express.Router();

router.get('/', async function(req, res){
    const results = await db.load('select * from categories');
    res.render(`vwProducts/index`, {
        products: results,
        empty: results.length === 0
    })
})

router.get('/add', function(req, res){
    res.render(`vwCategories/add`);

})

module.exports = router;
