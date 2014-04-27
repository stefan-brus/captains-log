var express = require('express');
var router = express.Router();

/* POST to add entry to the db */
router.post('/', function(req, res) {
    var db = req.db;

    var stardate = req.body.stardate;
    var text = req.body.text;
    var captain = req.body.captain;

    var entries = db.get('entries');

    entries.insert({
        "stardate" : stardate,
        "text" : text,
        "captain" : captain
    }, function (err, doc) {
        if (err) {
            res.send("There was a problem adding the entry to the database.");
        }
        else {
            res.location("/");
            res.redirect("/");
        }
    });
});

module.exports = router;
