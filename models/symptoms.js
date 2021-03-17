const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const symptomSchema = new Schema ({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    symptoms: { type: Array },
    // Nausea: {type: Number },
    // BodyPain: {type: Number },
    // Fatigue: {type: Number }, 
    date: { type: Date, default: Date("<YYYY-mm-dd>")}
});

const Symptoms = mongoose.model("userSymptoms", symptomSchema);

module.exports = Symptoms;



