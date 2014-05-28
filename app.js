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
                        if (member.is_active()) {
                            res.status(200).send("1");
                        }
                        else {
                            res.status(403).send("0");
                        }
                    }
                    else {
                        res.status(404).send("0");
                    }
                });
            }
            res.status(400).send("No identity specified.");
        });
        
        return app;
    }
}

