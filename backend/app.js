const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('hbs', exphbs({
    defaultLayout:'main.hbs'

}));

app.set('view engine', 'hbs');

app.get('/', function(req, res){
    res.render('home');
})


app.get('/about', function(req, res){
    res.render('about');
})


var path = require('path');
app.get('/homepage', function(req, res){
    //res.sendFile(path.join(__dirname, `../html`, `homepage.html`));
    res.render('homepage', {layout: false});
})


app.use('/admin/categories', require('./routes/category.route'));
app.use('/admin/products', require('./routes/product.route'));

const PORT = 3000;
app.listen(PORT, function(){
    console.log(`Server is running at http://localhost:${PORT}`);
})
