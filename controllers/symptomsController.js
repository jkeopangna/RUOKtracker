const db = require('../models');

module.exports = {

    create: function(req, res) {
        console.log(req.body)
        db.Symptoms.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    find: function(req, res) {
        db.Symptoms.find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    
    // update : function(req, res) {
    //     db.Post.findOneAndUpdate({id: req.params.id})
    // }
}