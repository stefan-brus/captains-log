var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var db = req.db;
    var captains = db.get('captains');
    var entries = db.get('entries');

    captains.find({name:"Kirk"},{},function(e, res_captains) {
        if (e || res_captains.length == 0) {
            res.send("Error getting captains from db");
        }

        entries.find({captain:"Kirk"},{},function(e, res_entries) {
            if (e || res_entries.length == 0) {
                res.send("Error getting entries from db");
            }

            res.render('index', {
                "captain": res_captains[0],
                "entries": res_entries
            });
        });
    });
});

module.exports = router;
