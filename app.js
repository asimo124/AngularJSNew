
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', '$http', function($scope, $filter, $timeout, $http) {

	/*/
	$scope.$watch('twitter_handle', function(newValue, oldValue) {

		console.info('Changed!');
		console.log('Old: ' + oldValue);
		console.log('New: ' + newValue);
	});
	setTimeout(function() {
		$scope.$apply(function() {
			$scope.twitter_handle = 'Mike Jones';
			console.log("Scope Changed!");
		});
	}, 3000)
	$timeout(function() {
		$scope.$apply(function() {
			$scope.twitter_handle = 'Mike Jones';
			console.log("Scope Changed!");
		});
	}, 3000)





	var rulesrequest = new XMLHttpRequest();
	rulesrequest.onreadystatechange = function() {
		if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
			$scope.$apply(function() {
				$scope.rules = JSON.parse(rulesrequest.responseText);
			})
		}
	}
	rulesrequest.open("GET", "http://alexhawley-api.info/pills/twitter-rules", true);
	rulesrequest.send(http://alexhawley-api.info/pills/twitter-rules);

	/*/
	$scope.characters = 5;
	$scope.twitter_handle = "";
	console.log($scope.rules);
	$scope.lcase_word = function(str) {
		if (!str)
			return null;
		return $filter('lowercase')(str);
	};

	$http({
		method: 'GET',
		url: 'http://alexhawley-api.info/pills/twitter-rules'
	}).then(function successCallback(response) {
		console.log("response: ", response);
		$scope.rules = response.data;
	}, function errorCallback(response) {
		console.log(response);
	});


	$scope.alertClick = function() {
		alert('Clicked');
	};
	$scope.name = 'John Doe';
	//*/







}]);

