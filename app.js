var express = require('express');
var _ = require("underscore");

module.exports = {
    "title": "Accounts Management",
    "name": "accounts",
    "routes": [],
    "app": function membership (config, db, site) {
        var app = express();
        
        app.get('/identify', function(req, res){
            if (req.query.card_id_hash) {
                res.locals.User.findOne({where: {card_id_hashed: req.query.card_id_hash}}, function (err, member) {
                    if (member) {
                        res.send("yes");
                    }
                    else {
                        res.send("no");
                    }
                });
            }
            res.status(400).send("No identity specified.");
        });
        
        return app;
    }
}

