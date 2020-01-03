const db = require('../utils/db')

module.exports = {
    all : _ => db.load('select * from products'),
    allByCat: catId => db.load(`select * from products where CatID = ${catId}`),
    
};
