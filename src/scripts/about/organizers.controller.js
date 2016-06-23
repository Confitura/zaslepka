'use strict';

/* @ngInject */
function OrganizersController(Organizers, PersonModal, $scope, $timeout) {
	var vm = this;
	vm.list = Organizers.query({type: 'main'});
	vm.detailsOf = detailsOf;

	function detailsOf(person){
		PersonModal.openFor([person]);
	}
	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

	//$timeout(function () {
	//	var mapCenter = new google.maps.LatLng(52.24041, 21.019376);
	//	var mapOptions = {
	//		scrollwheel: false,
	//		zoom: 17,
	//		center: mapCenter,
	//		mapTypeId: google.maps.MapTypeId.ROADMAP,
	//		styles: [
	//			{
	//				"featureType": "landscape",
	//				"elementType": "geometry",
	//				"stylers": [
	//					{ "color": "#a2344d" }
	//				]
	//			},
	//			{
	//				"featureType": "poi",
	//				"elementType": "geometry",
	//				"stylers": [
	//					{ "color": "#ac3f58" }
	//				]
	//			},
	//			{
	//				"featureType": "road",
	//				"elementType": "geometry",
	//				"stylers": [
	//					{ "color": "#c56080" }
	//				]
	//			},
	//			{
	//				"elementType": "labels.text.fill",
	//				"stylers": [
	//					{ "color": "#ffffff" }
	//				]
	//			},
	//			{
	//				"elementType": "labels.text.stroke",
	//				"stylers": [
	//					{ "color": "#a2344d" }
	//				]
	//			}
	//		]
	//	};
	//	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	//	//var mapMarker = new google.maps.Marker({
	//	//	position: mapCenter,
	//	//	map: map,
	//	//	icon: "/images/marker.png"
	//	//});
	//});
}
module.exports = OrganizersController;