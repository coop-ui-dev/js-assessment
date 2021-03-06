asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   * 
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
    return new Promise(function(success, failure) {
      if(value != undefined) {
        success(value);
      } else {
        failure("value was undefined");
      }
    });
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   * 
   * 
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: function manipulateRemoteData(url) {

    //---
    //  I think this is what you're looking for.  I had to look at the test case
    //  and the data file and make some assumptions.
    //---
    return new Promise(function(success, failure) {
      $.ajax(url).done(function(data) {
        if(data != undefined && data.hasOwnProperty('people')) {
          var retArray = Array.from(data.people, function(item) { return item.name});
          retArray.sort();
          success(retArray);
        } else {
          failure("data does not contain correct property");
        }
      })
      .fail(function(error) {
        failure(error);
      })
    });
  },
};
