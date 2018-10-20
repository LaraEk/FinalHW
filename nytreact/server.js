const express = require("express");
const bodyParser = require ("body-parser");
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const request = require("request");

// const Article = require ("./ModelController/models/Article");

// const app = express();
// const PORT = process.env.PORT || 5656;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// a
// FILL THIS IN LATER first get hte scraper scraping

console.log(" ----- scraper scraping ----- ");
request("https://old.reddit.com/r/relationships/", function(err, resp, html) {
    var $ = cheerio.load(html);
    var results = [];

    $("p.title").each(function(i, element) {
        var title = $(element).text();
        var link = $(element).children().attr("href");

        results.push({
            title: title,
            link: link
        });
    });

console.log(results);
});