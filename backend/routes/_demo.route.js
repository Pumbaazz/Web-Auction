const express = require('express');
const router = express.Router();


router.get('/editor', async function(req, res) {
    // router.get('/:id', async function(req, res) {
    //     const rows = await productModel.single(req.params.id);
    //     res.render(`vwProducts/detail`, {
    //         product: rows[0]
    //     })
    // })
    res.render('vwDemo/editor');
    
})
router.post('/editor', async function(req, res) {
    console.log(req.body.FullDes);
    res.send('ok');
})

module.exports = router;
