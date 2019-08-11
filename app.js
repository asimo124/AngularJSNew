
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
	$scope.lcase_word = function(str) {
		if (!str)
			return null;
		return $filter('lowercase')(str);
	};

	$scope.new_rule = "";
	$scope.addRule = function(e) {

		e.preventDefault();
		$http({
			method: 'GET',
			url: 'http://alexhawley-api.info/pills/add-twitter-rule?rule_name=' + $scope.new_rule
		}).then(function successCallback(response) {
			$scope.rules = response.data.rules;
		}, function errorCallback(response) {
			console.log(response);
		});
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

}]);

