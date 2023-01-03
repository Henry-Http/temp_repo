const names = require("./4-module")
const sayHi = require("./5-module2")
const alt = require("./6-altExport")
require("./7-mindGrenade")

console.log(names)

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
console.log(alt.item)