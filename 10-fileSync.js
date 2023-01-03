const {readFileSync, writeFileSync} = require('fs');

const first =readFileSync("./content/first.txt", "utf8");
const second =readFileSync("./content/secondText.txt", "utf8");

// console.log(`${first}

// ${second}`);

writeFileSync("./content/writtenFile.txt", `this is the value of the written file

${first} 

${second}` , {flag: "a"})