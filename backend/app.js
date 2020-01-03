const express = require('express');
const exphbs = require('express-handlebars');
const numeral = require('numeral');

require('express-async-errors');
const app = express();

app.use(express.urlencoded({
    extended: true
}));


app.engine('hbs', exphbs({
    defaultLayout:'main.hbs',
    helpers: {
        format: val => numeral(val).format('0,0')
    }
}));

app.set('view engine', 'hbs');

app.use('/public', express.static('public'));


app.get('/', function(req, res){
    res.render("home");
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

app.use('/admin/categories', require('./routes/category.route'));
app.use('/admin/products', require('./routes/product.route'));


app.use('/products', require('./routes/_product.route'));
app.get('/err', function(req, res){
    throw new Error('beng beng');
})


app.use(function(req, res){
    res.render('404', {
        layout: false
    });

})

app.use(function(err, req, res, next){
    console.log(err);
    res.send('error');

})

const PORT = 3000;
app.listen(PORT, function(){
    console.log(`Server is running at http://localhost:${PORT}`);
})
