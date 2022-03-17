const myController = require("../controllers/my_controller");

const express = require('express');
const PiyushGuptaDetailSchema = require("../models/PiyushGupta_111915088_details");

const router = express.Router();

router.route('/register')
.get(async(req, res) => {
    res.render('register', {logged: false});
})
.post(myController.register.post);

router.route('/login')
.post(myController.login.post);

router.route('/add')
.get(async(req, res) => {
    res.render('add', {logged: true});
})
.post(myController.add);

router.route('/report/:emp')
.get(async(req, res) => {
    var user = await PiyushGuptaDetailSchema.findOne({'employeeNumber': req.params.emp});
    console.log("report - ", user);
    res.render('report', {
        user: user,
        logged: true
    });
})
.post(myController.report);




module.exports = router;
