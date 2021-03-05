const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const symptomSchema = new Schema ({
    user: { 
        name: {type: String, required: true },
        password: {type: String, required: true }
    },
    symptoms: { type: Array, required: true },
    Nausea: {type: Number, required: true },
    BodyPain: {type: Number, required: true },
    Fatigue: {type: Number, required: true}, 
    date: { type: Date, default: Date.now }
});

const Symptoms = mongoose.model("userSymptoms", symptomSchema);

module.exports = Symptoms;



