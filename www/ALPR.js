var exec = require('cordova/exec');

function ALPRPlugin() { 
 console.log("ALPR.js: is created");
}

ALPRPlugin.prototype.echoe = function(aString){
 console.log("ALPR.js: echo");

 exec(function(result){
     /*alert("OK" + reply);*/
   },
  function(result){
    /*alert("Error" + reply);*/
   },"Echo","echo",["aString"]);
}

 var alprPlugin = new ALPRPlugin();
 module.exports = alprPlugin;
