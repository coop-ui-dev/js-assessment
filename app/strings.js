stringsAnswers = {

  useBuiltin : false,

  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {

    //---
    //  NOTE : this is a good problem.
    //---

    //---
    //  Going to take a big hammer approach to this.
    //
    //  Depending on the size of the string - there are much better ways
    //  to accomplish this.
    //---
    for(var index = 0; index < str.length; index++) {
      var temp = Array(amount + 1).fill(str[index]).join('');
      var loc = str.indexOf(temp);
      while(loc > -1) {
        str = str.replace(temp, temp.substr(0, amount));
        loc = str.indexOf(temp);
      }
    }
    return str;
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'cba'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {

    if(this.useBuiltin) {
      return str.split('').reverse().join('');
    } else {
      var len = str.length - 1;
      var retValue = "";
      for(var index = len; index >= 0; index--) {
        retValue += str[index];
      }
      return retValue;
    }
  },
};
