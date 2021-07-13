const path = require("path");
const fs = require("fs");

const chripArr = [
    {

        message: "this is a chrip",
        user: "Sophia",
    },

    {
        message: "this is a chrip",
        user: "Sophia",
    },

    {
        message: "this is a chrip",
        user: "Sophia",
    }
];

const writePath = path.join(__dirname, "chrip.JSON");


fs.writeFile('chirps.json', JSON.stringify(chripArr), function (err) {
    if (err) throw err;
    console.log('saved!');
})

fs.readFile('chirps.json', function (err, data) {
    if (err) throw err;
    console.log(JSON.parse(data));
})

