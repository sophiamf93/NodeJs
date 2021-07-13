const rp = require("request-promise");
const fs = require("fs");
const path = require("path");

rp("https://www.reddit.com/r/popular.json")
    .then(function (json) {
        return JSON.parse(json);
    })
    .then(function (info) {
        let articleArr = [];
        const writePath = path.join(__dirname, "popular-articles.json")
    })

        info.data.children.forEach(function (article) {
            articleArr.push({
                title: article.data.title,
                url: article.data.url,
                author: article.data.author
            })
        }

            .catch(function (err) {
                console.log(err);
            })
