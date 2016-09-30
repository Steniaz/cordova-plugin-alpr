module.exports = {
	echo: function(string, successCallback) {
	    cordova.exec(successCallback,
	                 null, // No failure callback
	                 "Echo",
	                 "echo",
	                 [string]);
	}
};