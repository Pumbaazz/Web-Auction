const db = require('../utils/db')

module.exports = {
    all : _ => db.load('select * from user_clc'),
    add : entity => db.add(entity, 'user_clc'),

    singleByUserName: async username => {
        const rows = db.load(`select * from user_clc where username = '${username}'`);
        if (rows.length > 0) return rows[0];
        return null;
    } 
};
