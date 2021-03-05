const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/TestSymptoms");

const testSeeds = [
    {
        hisSymptoms: [{
            Nausea: 3,
            BodyPain: 4,
            Fatigue: 2,
            date: new Date(Date.now())
        }]
    },
    {
        herSymptoms: [{
            Nausea: 10,
            BodyPain: 6,
            Fatigue: 4,
            date: new Date(Date.now())
        }]
    }
];

db.Post.remove({})
.then(() => db.Post.collection.insertMany(testSeeds))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});