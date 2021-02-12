
module.exports = Phrase

String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// function reverse(string) {
//   return Array.from(string).reverse().join("");
// }

function Phrase(content) {
  this.content = content;


  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }


  this.palindrome = function palindrome() {
   return this.processedContent() === this.processedContent().reverse();
 }
}
