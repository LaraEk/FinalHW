const express = require("express");
const bodyParser = require ("body-parser");
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const request = require("request");
// const axios = require("axios"); (I'll only include this if I end up using axios)

const routes = require("./Routes");
// const db = require("./ModelsandControllers/models");

// const Article = require ("./ModelController/models/Article");

const app = express();
const PORT = process.env.PORT || 5656;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("client"));
//app.use(routes);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/etymapsdb");


app.listen(PORT, function() {
    console.log("connected on " + PORT);
});


// THIS WORKS
// console.log(" ----- scraper scraping ----- ");
// request("https://old.reddit.com/r/etymologymaps/", function(err, resp, html) {
//     var $ = cheerio.load(html);
//     var results = [];

//     $("p.title").each(function(i, element) {
//         var title = $(element).text();
//         var link = $(element).children().attr("href");

//         results.push({
//             title: title,
//             link: link
//         });
//     });

// console.log(results);
// });