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
            Nausea: {
                count: 5,
                severity: 3,
            },
            BodyPain: {
                count: 3,
                severity: 4
            },
            Fatigue: {
                count: 5,
                severity: 2,
            }
        }],
        date: new Date(Date.now())
    },
    {

        user: {
            name: "sick2myStomach",
            password: "painkillers",
        },
        symptoms: [{
            Nausea: {
                count: 10,
                severity: 10,
            },
            BodyPain: {
                count: 6,
                severity: 6,
            },
            Fatigue: {
                count: 4,
                severity: 4,
            }
        }],
        date: new Date(Date.now())
    }
];

db.Post.remove({})
.then(() => db.Post.collection.insertMany(seeds))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});