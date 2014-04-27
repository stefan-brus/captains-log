var express = require('express');
var router = express.Router();

/* GET to delete an entry from the db */
router.post('/', function(req, res) {
    var db = req.db;

    var stardate = req.query.stardate;

    var entries = db.get('entries');

    entries.find({"stardate": 1}, {}, function(err, doc) {
        console.log(doc);
    })

    entries.remove({
        "stardate" : stardate
    }, {}, function (err, doc) {
        if (err) {
            res.send("There was a problem deleting the entry from the database.");
        }
        else {
            res.location("/");
            res.redirect("/");
        }
    });
});

module.exports = router;
