const express = require('express');
const productModel = require('../models/product.model');

const router = express.Router();

router.get('/byCat/:catId', async function(req, res) {
    const rows = await productModel.allByCat(req.params.catId);
    res.render(`vwProducts/byCat`, {
        products: rows,
        empty: rows.length === 0
    })
})

module.exports = router;
