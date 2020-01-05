const express = require('express');
const moment = require('moment');
const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');
const config = require('../config/default.json')

router.get('/register', async function(req, res) {
   res.render('vwAccount/register');
})


router.post('/register', async function(req, res) {
    const hash = bcrypt.hashSync(req.body.password, config.authentication.saltRounds);
    const dob = moment(req.body.dob, 'DD/MM/YYYY').format('YYYY-MM-DD');
    const entity = {
        username: req.body.username,
        password_hash: hash,
        name: req.body.name,
        email: req.body.email,
        dob,
        permission: 0
    }
    const ret = await userModel.add(entity);
    res.render('vwAccount/register');
 })

 router.get('/is-available', async function(req, res) {
    const user = await userModel.singleByUserName(req.body.user);
    if(!user) return res.json(true);
    res.json(false);
 })

module.exports = router;
