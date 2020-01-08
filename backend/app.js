const express = require('express');
require('express-async-errors');
const app = express();


app.use(express.urlencoded({
    extended: true
}));

// module.exports = function (app) {
//     app.engine('hbs', exphbs({
//       defaultLayout: 'main.hbs',
//       helpers: {
//         section: hbs_sections(),
//         format: val => numeral(val).format('0,0')
//       }
//     }));
//     app.set('view engine', 'hbs');
//   };
  
// app.set('view engine', 'hbs');

app.use('/public', express.static('public'));

require('./middlewares/session.mdw')(app);
require('./middlewares/view.mdw')(app);
require('./middlewares/local.mdw')(app);
require('./middlewares/routes.mdw')(app);
require('./middlewares/error.mdw')(app);


//const categoryModel = require('./models/category.model');

// app.use(async function(req, res, next){
//     const rows = await categoryModel.allWithDetails();
//     res.locals.lcCategories = rows;
//     next();

// })


// app.get('/', function(req, res){
//     res.render("home");
// })


// app.get('/about', function(req, res){
//     res.render('about');
// })


// var path = require('path');
// app.get('/homepage', function(req, res){
//     res.render('homepage', {layout: true});
// })


/*app.get('/admin/categories', function(req, res){
    const list = [
        {CatID: 1, CatName: 'Laptop'},
        {CatID: 2, CatName: 'Smartphone'},
        {CatID: 3, CatName: 'Tabl et'},
        {CatID: 4, CatName: 'Jewelry'},
        {CatID: 5, CatName: 'Clothes'},
    ]
    res.render('vwCategories/index', {
        categories : list,
        empty: list.length ===0
    });
});*/

// app.use('/admin/categories', require('./routes/category.route'));
// app.use('/admin/products', require('./routes/product.route'));

// app.use('/account', require('./routes/_account.route'));
// app.use('/products', require('./routes/_product.route'));

// app.get('/err', function(req, res){
//     throw new Error('beng beng');
// })


// app.use(function(req, res){
//     res.render('404', {
//         layout: false
//     });

// })

// app.use(function(err, req, res, next){
//     console.log(err);
//     res.send('error');

// })


const PORT = 3000;
app.listen(PORT, function(){
    console.log(`Server is running at http://localhost:${PORT}`);
})
