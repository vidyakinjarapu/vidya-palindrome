String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// function reverse(string) {
//   return Array.from(string).reverse().join("");
// }

function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.processor(this.content);
  };

  this.palindrome = function palindrome() {
   return this.processedContent() === this.processedContent().reverse();
 }
}

//to apply palindrome directly on a String
String.prototype.palindrome = function() {
  return new Phrase(this).palindrome();
}

// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;
//
//   this.processedContent = function processedContent() {
//     return this.processor(this.translation);;
//   };
//   // TranslatedPhrase.prototype = new Phrase();
// }
// TranslatedPhrase.prototype = new Phrase();
