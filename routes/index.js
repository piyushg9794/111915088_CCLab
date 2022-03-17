var router = require('express').Router();

router.route('/')
    .get(async(req, res) => {
        try {
            return res.render('index', {logged: false});
        } catch (err) {
            console.log("index home err -- ", err);
            return res.send({'success': false, "msg": "Server error occurred"});
        }
    });



module.exports = router;