var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

app.engine('hbs', exphbs({
    defaultLayout:'main.hbs'

}));

app.set('view engine', 'hbs');

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
        {CatID: 2, CatName: 'Điện thoại'},
        {CatID: 3, CatName: 'Tablet'},
        {CatID: 4, CatName: 'Jewelry'},
        {CatID: 5, CatName: 'Ahihi'},
    ]
    res.render('vwCategories/index', {
        categories : list,
        empty: list.length ===0
    });
});
app.use('/admin/categories', require('./routes/category.route'));
app.use('/admin/products', require('./routes/product.route'));

const PORT = 3000;
app.listen(PORT, function(){
    console.log(`Server is running at http://localhost:${PORT}`);
})
