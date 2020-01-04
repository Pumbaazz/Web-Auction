const db = require('../utils/db')

module.exports = {
    all : _ => db.load('select * from categories'),
    allWithDetails: _ => {
        const sql = ``;
        return db.load();
    },
    single: async id => {
        const sql = `select * from categories where CatID = ${id}`;
        const rows = await db.load(sql);
        if(rows.length === 0){
            return null;
        }
        return rows[0];
    },

    add : entity => db.add(entity, 'categories'),
    del : id => db.del({CatID: id }, 'categories'),
    patch: entity => {
        const condition = {CatID: entity.CatID};
        delete entity.CatID;
        return db.patch(entity, condition, 'categories');
    }
};
