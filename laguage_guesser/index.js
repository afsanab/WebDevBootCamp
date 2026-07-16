// TODO:
//  take in a command line arg node index.js "arg"
//  then print the name of the language
//  langs.where
//  create a package
// franc gives iso lang code, that will  read both documentation 

const franc = require('franc');
const langs = require('langs');
args = process.argv;

console.log(args[2]);
console.log(langs.where("3", franc(args[2])).name);
