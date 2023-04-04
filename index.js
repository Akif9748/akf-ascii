const chars = require("./char.json");

/**
 * 
 * @param {String} text for converting
 * @param {String} [spaceBetweenChars] Space between chars
 */
function ascii(text, spaceBetweenChars) {
    return join(text.toLowerCase().split("").map(harf => chars[harf] || chars[" "]), spaceBetweenChars).join("\n")
}

/**
 * 
 * @param {[[string]]} args char(s) as akf-ascii format
 * @param {*} spaceBetweenChars what split chars?
 * @returns 
 */
function join(args, spaceBetweenChars = " ") {
    const arr = [];

    for (let i = 0; i < 5; i++)
        arr[i] = args.map(arg => arg[i]).join(spaceBetweenChars);

    return arr;
}

ascii.chars = chars;
ascii.join = join;
module.exports = ascii;