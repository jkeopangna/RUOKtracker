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
    },

    findAllby: function(req, res ) {
       const userInput = req.body 
       db.Symptoms.find({user: userInput.userId})
        .then(dbData => {
            console.log(dbData[0].symptoms)
            res.json(dbData)
        })
       console.log(userInput)
    }



    // findOne: function(req, res) {
    //     db.Symptoms.get()
    //       .findOne(req.params.user)
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   },


    
    
    //findbyidfindById: function(req, res) {
    // db.Book
    // .findById(req.params.id)
    // .then(dbModel => res.json(dbModel))
    // .catch(err => res.status(422).json(err));
    // update : function(req, res) {
    //     db.Post.findOneAndUpdate({id: req.params.id})
    // }
}