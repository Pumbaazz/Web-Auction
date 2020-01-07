const session = require('express-session')

module.exports = function(app){
    apps.set('trust proxy', 1)
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        //cookie: {secure:  true}
    }))

}