var center ={lat:-36.73821002550475,lng:174.75127659787188}
var map = L.map('map').setView(center,17)
L.tileLayer('https://api.mapbox.com/styles/v1/thalyx90/ckbzusheq3oet1io0e0eo0gqj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGhhbHl4OTAiLCJhIjoiY2o2YjdrZHRlMWJmYjJybDd2cW1rYnVnNSJ9.j_DQLfixHfhioVjH6qmqkw'
).addTo(map)

var services = [
	{
		latlng:{lat:-36.73821002550475,lng:174.75127659787188},
		description:'Superette',
		icon:'assets/svg/pin.svg'
	},
	// {
	// 	latlng:{lat:-36.85578459574629,lng:174.76564830117056},
	// 	description:'Cafe Crema',
	// 	icon:'assets/heart.svg'
	// },
	// {
	// 	latlng:{lat:-36.855046311932334,lng:174.7665280656616},
	// 	description:'Pizza',
	// 	icon:'assets/heart.svg'
	// },

]

_(services).each(function(service){
   
    var serviceIcon = L.icon({
		iconUrl: service.icon,
		iconSize: [30,30]
    })
    var marker = L.marker(service.latlng,{icon:serviceIcon}).addTo(map)

})