// TODO:
//  take in a command line arg node index.js "arg"
//  then print the name of the language
//  langs.where
//  create a package
// franc gives iso lang code, that will  read both documentation 

const franc = require('franc');
const langs = require('langs');
const colors = require("colors");
const languageCode = franc(process.argv[2].trim());

if (languageCode === 'und') {
    console.log("SORRY COULD'T FIGURE IT OUT".red);
} else {
    const language = langs.where("3", languageCode);
    console.log(language.name.green);
}