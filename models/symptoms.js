const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const symptomSchema = new Schema ({
    user: { 
        name: {type: String },
        password: {type: String }
    },
    symptoms: { type: Array },
    Nausea: {type: Number },
    BodyPain: {type: Number },
    Fatigue: {type: Number }, 
    date: { type: Date, default: Date.now }
});

const Symptoms = mongoose.model("userSymptoms", symptomSchema);

module.exports = Symptoms;



