// MyApp.js
MyApp = (function(){
    var api = {};
 
    // A private method
    var printNumber = function(n) { console.log(n); };
 
    // A public method we're putting on the API
    api.printThirteen = function() { printNumber(13); };
 
    return api;
}());
// In the console
MyApp.printThirteen(); // prints 13