# vidya-palindrome
This is a sample NPM module created for palindrome detector project while learning java script & automated testing.
with testing tool *MOCHA*

The module can be used as follows:

$ npm install --global vidya-palindrome
$ vim test.js
let Phrase = require("vidya-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
