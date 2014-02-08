'use strict';

angular.module('angularGoogleMapsApp').controller('DemoCtrl', function ($scope, $timeout, $http) {	
	
	function randomLatitude () {
		var num = Math.floor(Math.random() * 75) + 1;
		
		if ((Math.floor(Math.random() * 10) + 1) % 2 === 0) {
			return -num;
		}
		
		return num;
	}
	
	function randomLongitude () {
		var num = Math.floor(Math.random() * 180) + 1;
		
		if ((Math.floor(Math.random() * 10) + 1) % 2 === 0) {
			return -num;
		}
		
		return num;
	}
	
	var lastMarkerId = 0;
	function generateRandomMarkers (num) {
		var cnt = $scope.map.markers.length;
		
		for (var i = 0; i < num; i++) {
			$scope.map.markers.push({
				id: ++lastMarkerId,
				title: 'Marker ' + lastMarkerId,
				coords: {
					latitude: randomLatitude(),
					longitude: randomLongitude()
				}			
			});
		}
	};
	
	var lastPolylineId = 0;
	function generateRandomPolyline (num) {
		var cnt = $scope.map.polylines.length;
		
		for (var i = 0; i < num; i++) {
		
			var path = [];
			
			for (var j = 0; j < 4; j++) {
				path.push({
					latitude: randomLatitude(),
					longitude: randomLongitude()
				})
			}
		
			$scope.map.polylines.push({
				id: ++lastPolylineId,
				title: 'Polyline ' + lastPolylineId,
				path: path,
				clickable: true,
				editable: true,
				geodesic: true,
				draggable: true
			});
		}
	}
	
	var lastPolygonId = 0;
	function generateRandomPolygon (num) {
		var cnt = $scope.map.polygons.length;
		
		for (var i = 0; i < num; i++) {
		
			var path = [];
			
			for (var j = 0; j < 4; j++) {
				path.push({
					latitude: randomLatitude(),
					longitude: randomLongitude()
				})
			}
		
			$scope.map.polygons.push({
				id: ++lastPolygonId,
				title: 'Polygon ' + lastPolygonId,
				path: path,
				fill: {
					color: '#ff0000',
					opacity: 0.6
				},
				clickable: true,
				editable: true,
				geodesic: true,
				draggable: true
			});
		}
	}
	
	$scope.map = {
		center: {
			latitude: 40.47,	// NYC
			longitude: -73.85	// NYC
		},
		zoom: 8,
		markers: [],
		polylines: [],
		polygons: []
	};	
	
	$scope.addMarker = function () {
		generateRandomMarkers(1);
	};
	
	$scope.removeMarker = function (marker) {	
		var index = _.indexOf($scope.map.markers, marker);
		
		if (index !== -1) {
			$scope.map.markers.splice(index, 1);
		}
		
		if (!$scope.map.markers.length) {
			$scope.map.zoom = 8;
		}
	};
	
	$scope.addPolyline = function () {
		generateRandomPolyline(1);
	};
	
	$scope.removePolyline = function (p) {
		var index = _.indexOf($scope.map.polylines, p);
		
		if (index !== -1) {
			$scope.map.polylines.splice(index, 1);
		}
	};
	
	$scope.addPolygon= function () {
		generateRandomPolygon(1);
	};
	
	$scope.removePolygon = function (p) {
		var index = _.indexOf($scope.map.polygons, p);
		
		if (index !== -1) {
			$scope.map.polygons.splice(index, 1);
		}
	};
});
