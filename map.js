mapboxgl.accessToken = 'pk.eyJ1IjoiYW1vbnJvZWhhbW1vbmQiLCJhIjoiY2pvb3lqeTlvMGhqZzNxbDFhdmRjdjFkYSJ9.5lXQk4Y6bwkZNL8FlCD9rg';


let mapOptions = {
	container: 'map',
	style: 'mapbox://styles/mapbox/dark-v9',
	center: [-98.454838, 39.186895],
	zoom: 3.00
};

if (is_mobile) {
	mapOptions.zoom = 2.00;
}
const map = new mapboxgl.Map(mapOptions);

const disaster_toggle = (disaster) => {
	const layers = map.getStyle().layers.filter((o) => {
		return (o.id.indexOf("states-") > -1);
	});

	layers.forEach((layer) => {
		map.setLayoutProperty(layer.id, "visibility", "none");
	});

	if (disaster !== "state") {
		map.setLayoutProperty(`states-fill-${disaster}`, "visibility", "visible");
		map.setLayoutProperty(`states-line-${disaster}`, "visibility", "visible");
	} else {
		map.setLayoutProperty(`states-fill`, "visibility", "visible");
		map.setLayoutProperty(`states-line`, "visibility", "visible");
	}
};

map.on("load", () => {
	map.addSource("disasterData", {
		type: 'vector',
		url: 'mapbox://amonroehammond.cjvfa9pb412kl2xmwfp8mxggr-6yl2k'
	});

	console.log(map);

	map.addLayer({
		"id": "states-fill",
		"type": "fill",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"fill-color": "#",
			"fill-opacity": 0.5
		}
	});

	map.addLayer({
		"id": "states-line",
		"type": "line",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"line-color": "#3e3e3e",
		}
	});

	map.addLayer({
		"id": "states-fill-flood",
		"type": "fill",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"fill-color": "#5EA4BF",
			"fill-opacity": 0.5
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Flood"]]
	});

	map.addLayer({
		"id": "states-line-flood",
		"type": "line",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"line-color": "#ffffff",
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Flood"]]
	});

	map.addLayer({
		"id": "states-fill-hurricane",
		"type": "fill",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"fill-color": "#174d71",
			"fill-opacity": 0.5
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Hurricane"]]
	});

	map.addLayer({
		"id": "states-line-hurricane",
		"type": "line",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"line-color": "#ffffff",
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Hurricane"]]
	});
	map.addLayer({
		"id": "states-fill-fire",
		"type": "fill",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"fill-color": "#d93d04",
			"fill-opacity": 0.5
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Fire"]]
	});

	map.addLayer({
		"id": "states-line-fire",
		"type": "line",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"line-color": "#ffffff",
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Fire"]]
	});

	map.addLayer({
		"id": "states-fill-earthquake",
		"type": "fill",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"fill-color": "#539032",
			"fill-opacity": 0.5
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Earthquake"]]
	});

	map.addLayer({
		"id": "states-line-earthquake",
		"type": "line",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"line-color": "#ffffff",
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Earthquake"]]
	});

	map.addLayer({
		"id": "states-fill-coastal_storm",
		"type": "fill",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"fill-color": "#1583c1",
			"fill-opacity": 0.5
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Coastal Storm"]]
	});

	map.addLayer({
		"id": "states-line-coastal_storm",
		"type": "line",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"line-color": "#ffffff",
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Coastal Storm"]]
	});

	map.addLayer({
		"id": "states-fill-mud",
		"type": "fill",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"fill-color": "brown",
			"fill-opacity": 0.5
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Mud/Landslide"]]
	});

	map.addLayer({
		"id": "states-line-mud",
		"type": "line",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"line-color": "#ffffff",
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Mud/Landslide"]]
	});

	map.addLayer({
		"id": "states-fill-severe_storm",
		"type": "fill",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"fill-color": "#37748C",
			"fill-opacity": 0.5
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Severe Storm(s)"]]
	});

	map.addLayer({
		"id": "states-line-severe_storm",
		"type": "line",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"line-color": "#ffffff",
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Severe Storm(s)"]]
	});

	map.addLayer({
		"id": "states-fill-snow",
		"type": "fill",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"fill-color": "gray",
			"fill-opacity": 0.5
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Snow"]]
	});

	map.addLayer({
		"id": "states-line-snow",
		"type": "line",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"line-color": "#ffffff",
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Snow"]]
	});

	map.addLayer({
		"id": "states-fill-tornado",
		"type": "fill",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"fill-color": "#bf996b",
			"fill-opacity": 0.5
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Tornado"]]
	});

	map.addLayer({
		"id": "states-line-tornado",
		"type": "line",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"line-color": "#ffffff",
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Tornado"]]
	});

	map.addLayer({
		"id": "states-fill-volcano",
		"type": "fill",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"fill-color": "#f2620f",
			"fill-opacity": 0.5
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Volcano"]]
	});

	map.addLayer({
		"id": "states-line-volcano",
		"type": "line",
		"source": "disasterData",
		"source-layer": "finalDataWithStates",
		"paint": {
			"line-color": "#ffffff",
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Volcano"]]
	});
});