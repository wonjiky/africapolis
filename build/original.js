const geojsonMarkerOptions_small = {
	radius: 4,
	fillColor: "red",
	color: "#000",
	weight: 1,
	opacity: 1,
	fillOpacity: 0.8
};    

class LeafletMap extends Component {
	constructor(props){
		super(props)
		this.state = {
			africa_one: africa_one,
			top50: top50,
			africa_continent: africa_continent,
			agglos_geo: agglos_geo
		};
	}

	componentDidMount() {
		const southWest = L.latLng(-28.739134, -25.058270);
		const northEast = L.latLng(32.157281, 50.089421);
		const mybounds = L.latLngBounds(southWest, northEast);
		this.mymap = L.map("mapid", {
		minZoom: 4,
		maxBounds:mybounds,
		opacity:0
		})
		.setView([1.46,13.3], 4);

		L.tileLayer('https://api.mapbox.com/styles/v1/mkmd/cjj041lbo07vo2rphltlukpya/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA', 
		{maxZoom: 18,})
		.addTo(this.mymap);

		L.geoJson(this.state.africa_one, {
			invert:true,
			color:"grey",
			fillOpacity:0.4 
		})
		.addTo(this.mymap);

		const africa_continent_map = 
		L.geoJson(this.state.africa_continent,{onEachFeature: this.onEachFeature_continent})
		.addTo(this.mymap);
		africa_continent_map.setStyle({fillOpacity: 0,color: 'transparent'})
	}

	YearFilter(feature) {
		if(feature.properties.Year === "a") 
		return true
	}
		
	onEachFeature_continent(feature, layer) {
		let popupContent = "<table class='tooltip-table'>";
			popupContent += "<tr><td class='title'></td><td class='data'>" + feature.properties.NAME_FR + "</td></tr>";
			popupContent += "</table>";

		layer.on('mouseover', () => {
			layer.setStyle({
			fillOpacity: 0.3,
			color: 'black'
			});
			});

		layer.on('mouseout', () => {
			layer.setStyle({
			fillOpacity: 0.0,
			color: 'transparent'
			});
		});
		
		layer.on('click', () => {
			
			const citieslist=
			new L.geoJSON(top50, {filter: this.YearFilter,
				pointToLayer: function (feature, latlng) {return L.circleMarker(latlng);}})
				.addTo(this.mymap);
			
			citieslist.clearLayers();
			this.a=feature.properties.ISO3_CODE; 
			this.mymap.fitBounds(layer.getBounds());
			
			const CityFilter = (feature) => {
				if (feature.properties.ISO == this.a) 
				return true
			}
	
			const onEachFeature_cities = (feature, layer) => { 
				let popupContent = "<table class='tooltip-table'>";
				popupContent += "<tr><td class='title'>Name:</td><td class='data'>" + feature.properties.NAME + "</td></tr>";
				popupContent += "<tr><td class='title'>Population:</td><td class='data'>" + feature.properties.PTA2015 + "</td></tr>";
				popupContent += "</table>";
				layer.bindPopup(popupContent).openPopup();
			}

			const newlist = L.geoJson(this.state.agglos_geo,{onEachFeature: onEachFeature_cities, filter: CityFilter,
				pointToLayer: function (feature, latlng) {
					return L.circleMarker(latlng, geojsonMarkerOptions_small);
				}})
				citieslist.addLayer(newlist)
		});
	}

	render() {
	return <div id="mapid" />;
	}
}

export default LeafletMap;

