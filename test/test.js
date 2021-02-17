let assert = require("assert");
let Phrase = require("../index.js");

//describing a phrase object
describe("Phrase", function() {
  //Phrase # palindrome
  describe("#palindrome", function() {
    it("it should return a false for non palindrome", function() {
      let non_palindrome = new Phrase("apple");
      assert(!(non_palindrome.palindrome()));
    });

    it("it should return true for a palindrome", function(){
      let plainpalindrome = new Phrase("racecar");
      assert(plainpalindrome.palindrome());
    });

    it("it shoild return true for a mixed case palidrome", function(){
      let mixed_palindrome = new Phrase("Racecar");
      assert(mixed_palindrome.palindrome());
    });

    it("it should return true for a palindrome with punctuations", function(){
      let punct_pali = new Phrase("Madam I'm Adam!");
      assert(punct_pali.palindrome());
    });
  });
  describe('#letters', function(){
    it("Should return only letters", function() {
      let punc_palindrome = new Phrase("Madam, I\'m Adam!");
      assert.strictEqual(punc_palindrome.letters(), "MadamImAdam");
    })
  })
});
