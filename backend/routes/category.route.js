const express = require('express');
const db = require('../utils/db')
const categoryModel = require('../models/category.model')
const router = express.Router();

router.get('/', async function(req, res){
    const results = await categoryModel.all();
    res.render(`vwProducts/index`, {
        products: results,
        empty: results.length === 0
    })
})

router.get('/add', function(req, res){
    res.render(`vwCategories/add`);

})

router.post('/add', function(req, res){
    console.log(req.body);
    res.send('end')
})

module.exports = router;
