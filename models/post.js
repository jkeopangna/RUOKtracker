const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    user: { type: String, required: true },
    symptoms: { type: Array, required: true },
    date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;