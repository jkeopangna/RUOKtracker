const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema ({
    hisSymptoms: {type: Array, required: true},
    Nausea: {type: Number, required: true },
    BodyPain: {type: Number, required: true},
    Fatigue: {type: Number, required: true},
    date: {type: Number, required: true}
},
{
    herSymptoms: {type: Array, required: true},
    Nausea: {type: Number, required: true },
    BodyPain: {type: Number, required: true},
    Fatigue: {type: Number, required: true},
    date: {type: Number, required: true}
});

const TestSymptoms = mongoose.model("TestSymptoms", testSchema);

module.exports = TestSymptoms;