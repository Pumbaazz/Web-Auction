const express = require('express');
const productModel = require('../models/product.model');

const router = express.Router();

router.get('/byCat/:catId', async function(req, res) {
    for(const c of res.locals.lcCategories){
        if(c.CatID === +req.params.catId){
            c.isActive = true;
        }
    }
    const rows = await productModel.allByCat(req.params.catId);
    res.render(`vwProducts/byCat`, {
        products: rows,
        empty: rows.length === 0
    })
})

module.exports = router;
