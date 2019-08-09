
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', ['$log', '$resource', function($log, $resource) {

	//*/
	$log.log("hey there");
	$log.info("hey there");
	$log.warn("hey there");
	$log.debug("hey there");
	$log.error("hey there");
	//*/


}]);

