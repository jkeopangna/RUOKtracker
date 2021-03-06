const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/UserSymptoms");

const seeds = [
    {
        user: {
            name: "2sick4school",
            password: "fixme",
        },
        symptoms: [{
            Nausea: 3,
            BodyPain: 4,
            Fatigue: 2,
            date: new Date(Date.now())
        }]
    },
    {

        user: {
            name: "sick2myStomach",
            password: "painkillers",
        },
        symptoms: [{
            Nausea: 10,
            BodyPain: 6,
            Fatigue: 4,
            date: new Date(Date.now())
        }]
    }
];

db.Symptoms.remove({})
.then(() => db.Symptoms.collection.insertMany(seeds))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
