const {readFile, writeFile} = require('fs');

readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log("file not found");
        return;
    }
    console.log(result);
});