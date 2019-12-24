const express = require('express');

const router = express.Router();

router.get('/', function(req, res){
    const list = [
        {CatID: 1, CatName: 'Laptop'},
        {CatID: 2, CatName: 'Smartphone'},
        {CatID: 3, CatName: 'Tablet'},
        {CatID: 4, CatName: 'Clothes'},
        {CatID: 5, CatName: 'Sneakers'},
        {CatID: 6, CatName: 'Jewels'},

    ]
    res.render(`vwCategories/index`, {
        categories: list,
        empty: list.length === 0
    });
})

router.get('/add', function(req, res){
    res.render(`vwCategories/add`);

})

module.exports = router;

