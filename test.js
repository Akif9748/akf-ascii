const ascii = require(".");

console.log(ascii.join([
    ascii("akif").split("\n"),
    ascii.chars["q"]
]).join("\n"))