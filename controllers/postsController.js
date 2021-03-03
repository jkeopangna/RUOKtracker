const db = require("../models");

module.exports = {

    create: function(req, res) {
        db.Post.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    
    update : function(req, res) {
        db.Post.findOneAndUpdate({id: req.params.id})
    }
}