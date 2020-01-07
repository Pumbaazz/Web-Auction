module.exports = function(app) {
    app.get('/', function(req, res){
        res.render('home');
    })
    
    
    app.get('/about', function(req, res){
        res.render('about');
    })
    
    
    var path = require('path');
    app.get('/homepage', function(req, res){
        res.render('homepage', {layout: true});
    })
    
    
    app.get('/admin/categories', function(req, res){
        const list = [
            {CatID: 1, CatName: 'Laptop'},
            {CatID: 2, CatName: 'Smartphone'},
            {CatID: 3, CatName: 'Tablet'},
            {CatID: 4, CatName: 'Jewelry'},
            {CatID: 5, CatName: 'Clothes'},
        ]
        res.render('vwCategories/index', {
            categories : list,
            empty: list.length ===0
        });
    });
    
    app.use('/admin/categories', require('../routes/category.route'));
    app.use('/admin/products', require('../routes/product.route'));
    
    app.use('/account', require('../routes/_account.route'));
    app.use('/products', require('../routes/_product.route'));
    app.use('/demo', require('../routes/_demo.route'));
}