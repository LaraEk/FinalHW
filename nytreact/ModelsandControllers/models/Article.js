const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: { type: String, required: true },
    link: { type: String, required: true },
//    img: {} NOTE: I want to add the maps themselves in, but don't know how to do it
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;