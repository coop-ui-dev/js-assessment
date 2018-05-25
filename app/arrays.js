arraysAnswers = {

  useBuiltin : false,

  /**
   * Find the 0 based index of item in arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to find in arr
   * @returns {Number} The index of item in arr, or -1 if item is not in arr.
   */
  indexOf: function indexOf(arr, item) {
    // Implement a function, that returns the 0 based index of an element in an array.

    //---
    //  NOTE : Here is a non-builtin solution
    //---
    if(!this.useBuiltin) {
      for(var index = 0; index < arr.length; index++) {
        if(arr[index] == item) {
          return index;
        }
      }
      return -1;
    } else {
      return arr.indexOf(item);
    }

  },

  /**
   * Determine the sum of the items of arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number} The numerical sum of all items in arr.
   */
  sum: function sum(arr) {
  
    var theSum = 0;

    if(this.useBuiltin) {
      arr.map(function(value) {
        theSum += value;
      });
    } else {
      for(var index = 0; index < arr.length; index++) {
        theSum += arr[index];
      }
    }

    return theSum;

  },

  /**
   * Create a new array with the same items as arr, excluding item 
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from the new array
   * @returns {Number[]} A new array containing all numbers from arr except item.
   */
  remove: function remove(arr, item) {

    //---
    //  Check to see if data was passed in.
    //---
    if(arr == undefined || item == undefined) {
      return [];
    }

    //---
    //  There are other ways to do this that are a little faster but require more code.
    //  i.e. Use the initial arr for the indexOf and then use the 'new' array
    //  after the first entry.
    //---
    var retArray = arr.concat();

    var itemIndex = this.indexOf(retArray, item);
    while(retArray.length != 0 && itemIndex != -1) {
      retArray.splice(itemIndex, 1);
      itemIndex = this.indexOf(retArray, item);
    }

    return retArray
  },


  //==========
  //
  //  NOTE :
  //  removeWithoutCopy was not in the original file but is being tested so adding it.
  //
  //==========
  removeWithoutCopy : function removeWithoutCopy(arr, item) {

    var index = arr.indexOf(item);
    while(index != -1) {
      arr.splice(index, 1);
      index = arr.indexOf(item);
    }

    return arr;

  },

  /**
   * Adds a number, item, to the end of an array, arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be appended to the end of arr
   * @returns {Number[]} The array arr, with item appended.
   */
  append: function append(arr, item) {
    arr.push(item);

    return arr;
  },
  
  /**
   * Removes a number, item, from the end of an array, arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the last element removed..
   */
  truncate: function truncate(arr) {
    arr.pop();
    return arr;
  },

  /**
   * Adds a number, item, to the beginning of an array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to append to the beginning of arr.
   * @returns {Number[]} The array arr, with the first element item added
   */
  prepend: function prepend(arr, item) {

    return Array.concat([item], arr);
  },


  /**
   * Removes the first element from an array
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the first element item removed.
   */
  curtail: function curtail(arr) {
    arr.shift();
    return arr;
  },

  /**
   * Combines the two arrays arr1 and arr2 together
   * 
   * @param {Number[]} arr1 - An array of numbers
   * @param {Number[]} arr2 - An array of numbers
   * @returns {Number[]} A new array, with elements from arr1 and arr2 in that order.
   */
  concat: function concat(arr1, arr2) {
    return arr1.concat(arr2);
  },

  /**
   * Insert a number item into an array arr at the 0 based position index.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be inerted into arr
   * @param {Number} index - A 0 based index into the array arr.
   * @returns {Number[]} The array arr, with the number item inserted at position index.
   */
  insert: function insert(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  /**
   * Counts the number of times a number item appears in an array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to count in arr
   * @returns {Number} The count of the number of times the number item appeared in arr.
   */
  count: function count(arr, item) {
    var theCount = 0;
    arr.map(function(value) {
       if(item === value) {
         theCount++;
        }
      }
    );
    return theCount;
  },

  /**
   * Determines the number of duplicated numbers in the array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} An array of numbers that appear in arr more than once.
   */
  duplicates: function duplicates(arr) {

    var retArray = [];

    for(var index = 0; index < arr.length; index++) {
      if(index != arr.lastIndexOf(arr[index])) {
        if(!retArray.includes(arr[index])) {
          retArray.push(arr[index]);
        }
      }
    }

    return retArray;
  },

  /**
   * Squares each number in an array arr. Example: square([1, 2, 3]) returns [1, 4, 9].
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} A new array of numbers that contains the elements of arr squared.
   */
  square: function square(arr) {

    var retArray = [];
    for(var index = 0; index < arr.length; index++) {
      var num = arr[index];
      retArray.push(Math.pow(num , 2));
    }
    return retArray;
  },

  /**
   * Finds the indices of the occurrences of a number target in an array of numbers arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} target - A number to find all occurences of.
   * @returns {Number[]} A new array of numbers which represent the indices of target in arr.
   */
  findAllOccurrences: function findAllOccurrences(arr, target) {

    var retArray = [];
    arr.map(function(value, index) {
      if(value === target) {
        retArray.push(index);
      }
    })
    return retArray;
  },
};
