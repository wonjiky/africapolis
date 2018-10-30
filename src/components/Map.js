import React from 'react';
import { Component } from 'react';
import  L  from 'leaflet';
import 'leaflet.defaultextent';
import 'leaflet-easyprint';
import 'leaflet-draw';
import 'leaflet.measurecontrol';
import 'leaflet-easybutton';
import '../shared/leaflet.snogylop.js';
import "../../node_modules/leaflet/dist/leaflet.css";
import "../../node_modules/leaflet.defaultextent/dist/leaflet.defaultextent.css";
import "../../node_modules/leaflet-draw/dist/leaflet.draw.css";
import "../../node_modules/leaflet.measurecontrol/docs/leaflet.measurecontrol.css";


const southWest = L.latLng(-48.739134, -29.058270);
const northEast = L.latLng(42.157281, 52);
const mybounds = L.latLngBounds(southWest, northEast);

let config = {};
config.params = {

	center: [1.46,18.3],
	zoom: 3,
	zoomSnap: 1.2,
	minZoom: 3,
	maxBounds:mybounds,
	opacity:0,
  defaultExtentControl: true,
	measureControl:true

};
config.tileLayer = {
	//Original:
	uri: 'https://api.mapbox.com/styles/v1/mkmd/cjj041lbo07vo2rphltlukpya/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA',
	params: {
		maxZoom: 18,
		//attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <img src="africapolis/images/swac-oecd.png" height="17px"/>  '

	}
};

class LeafletMap extends Component {
	constructor(props){
		super(props)
		this.state = {
			map: null,
			tileLayer: null,
			list: 0,
			currLayerClicked: false,
		};

		// this.onEachFeature = this.onEachFeature.bind(this);
		// this.agglos_onEachFeature = this.agglos_onEachFeature.bind(this);
		this.agglos_pointToLayer = this.agglos_pointToLayer.bind(this);
		this.agglos_cityFilter = this.agglos_cityFilter.bind(this);
		this.placeHolder_filter = this.placeHolder_filter.bind(this);
		this.treemap_filter = this.treemap_filter.bind(this);
		this.hoverStyle = this.hoverStyle.bind(this);
		this.selectedStyle = this.selectedStyle.bind(this);
		this.treemap_pointToLayer = this.treemap_pointToLayer.bind(this);
		this.treemap_onEachFeature = this.treemap_onEachFeature.bind(this);
		this.selectedAgglosStyle = this.selectedAgglosStyle.bind(this);
	}

	componentDidMount() {
		let map = L.map('map', config.params);

		const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);
		this.setState({ map, tileLayer });



		this.mapShades = L.geoJson(this.props.africaOne, {
			invert:true,
			color:"grey",
			stroke: false,
			fillOpacity:0.8
		})
		this.mapShades.addTo(map);

		this.placeHolder = L.featureGroup();
		this.placeHolder.addTo(map);

		const printer = L.easyPrint({
      		sizeModes: ['Current'],
      		filename: 'Africapolis',
      		exportOnly: true,
      		hideControlContainer: true,
					hidden: true,
					customWindowTitle: "Copyright: SWAC"
		}).addTo(map);

		L.easyButton( 'fa-camera', function(){
			printer.printMap('CurrentSize', 'Africapolis');
		}).addTo(map);


		//map.on('beforePrint', () => {L.control.attribution(addAttribution("Copyright: Sahel and West Africa Club"))})
		//map.on('afterPrint', () => {L.control.attribution(removeAttribution("Copyright: Sahel and West Africa Club"))})



		// this.htmlObject =this.printer.getContainer();
		// this.puthtml = document.getElementById('new-parent');
		// this.puthtml.newParent.appendChild(this.htmlObject);

	}



	selectedStyle(){
		return({
			weight : 2,
			color : 'black',
			fillColor : 'yellow',
			fillOpacity : 0.03,
		})
	}

	hoverStyle(){
		return({
			color: '#E8AE40',
			weight: 3,
			stroke:true,
			fillOpacity: 0,
		})
	}

	componentDidUpdate(prevProps){
		// If Explore Wrapper is Mounted :
		let { selectedCountry, selectedAgglos } = this.props;
		if (this.props.exploreWrapperIsMounted === true){
			let currCountryValue = selectedCountry;
			let prevCountryValue = prevProps.selectedCountry;
			let currAgglosValue = selectedAgglos;
			let prevAgglosValue = prevProps.selectedAgglos;
			let Size = []



			this.mapOverlay = L.geoJson(this.props.africaContinent, {
				style: () => {return {color: 'transparent'}},
				onEachFeature: (feature, layer) => {

					layer.on('mouseover', () => {
						layer.setStyle(this.hoverStyle());
					});

					layer.on('mouseout', (e) => {
						this.mapOverlay.resetStyle(e.target);
					});

					layer.on('change', (e) => {
						this.placeHolder.clearLayers();
						this.state.map.fitBounds(layer.getBounds());
						this.ID = feature.properties.ID;
						this.agglos = L.geoJson(this.props.agglosGeo, {
							onEachFeature: (feature, layer) => {
								Size.push(feature.properties.Size);
								layer._leaflet_id = feature.properties.city_ID;

								layer.on('mouseover', (e) => {
									e.target.setStyle(this.highlightAgglosStyle(feature))
									let popupContent = "<table margin={{top: -20, right: 0, left: 0, bottom: 0}}>";//feature.properties.NAME
											popupContent += "<tr></td><td class='data'>" + feature.properties.NAME + "</td></tr>";
									// popupContent += "<tr><td class='title'>Population:</td><td class='data'>" + feature.properties.cityID + "</td></tr>";
											popupContent += "</table>";

									layer.bindTooltip(popupContent,{closeButton:false}).openTooltip();
								})

								layer.on('mouseout', (e) => {
									e.target.setStyle(this.defaultAgglosStyle(feature))
																	})

								layer.on('change', () => {
									e.target.setStyle(this.selectedAgglosStyle())


								})

								layer.on('click', (e) => {
									const cityID = feature.properties.city_ID;
									const cityName = feature.properties.NAME;
									const value = { value:cityID, label:cityName}
									this.props.agglosValueToMap(value);
									this.state.map.setView(layer._latlng, 12);

									let popupContent = "<table>";//feature.properties.NAME
											popupContent += "<tr></td><td class='data'>" + feature.properties.NAME + "</td></tr>";
									// popupContent += "<tr><td class='title'>Population:</td><td class='data'>" + feature.properties.cityID + "</td></tr>";
											popupContent += "</table>";
									 layer.bindPopup(popupContent,{closeButton:false}).openPopup();
								})





							},
							filter: this.agglos_cityFilter,
							pointToLayer: this.agglos_pointToLayer
						});

						this.props.sizeArray(Size);

						this.placeHolder.addLayer(this.agglos);
					});

					layer.on('click', () => {
						const ISO3_ID = feature.properties.ID;
						const ISO3_NAME = feature.properties.NAME_EN;
						const e = { value: ISO3_ID, label:ISO3_NAME}
						this.props.sendCountryValueToContent(e);
					});

					layer._leaflet_id = feature.properties.ID;
				}
			})
			this.mapOverlay.addTo(this.state.map);

			if(currCountryValue !== prevCountryValue && currCountryValue !== ''){
				let layer = this.mapOverlay.getLayer(currCountryValue);
				layer.fire('change')
			} else if (currCountryValue !== prevCountryValue && currCountryValue === ''){
				this.placeHolder.clearLayers();
			}

			if (currAgglosValue !== prevAgglosValue && currAgglosValue !== ''){
				let agglosLayer = this.agglos.getLayer(currAgglosValue)
				agglosLayer.fire('click');
			}

		// If Home Wrapper is Mounted :
		} else if(this.props.homeWrapperIsMounted) {


			let treemapcurrValue = this.props.treemapSelect;
			let treemapprevValue = prevProps.treemapSelect;
			let treemap_click = this.props.treemapSelect_click;
			console.log(treemap_click)

			if(this.props.treemapFilter === 'treemap'){ // && this.props.treemapValue === 0){


				if(this.treemap){
					this.treemap.clearLayers(this.treemap);
				}
				this.treemap = L.geoJson(this.props.treemap_buildup, {
					filter: this.treemap_filter,
					onEachFeature: this.treemap_onEachFeature,
					pointToLayer: this.treemap_pointToLayer})
				this.state.map.addLayer(this.treemap);
			}

			if (treemap_click)
			{let layer = this.treemap.getLayer(treemap_click);
				if(layer)
				{layer.fire('click')}}

			if (treemapcurrValue){
				this.currLayer = this.treemap.getLayer(treemapcurrValue);
				this.prevLayer = this.treemap.getLayer(treemapprevValue);
			}

			if(treemapcurrValue !== treemapprevValue){
				let layer = this.treemap.getLayer(treemapcurrValue);
				layer.fire('mouseover')
				if(treemapprevValue){
				let layerprev = this.treemap.getLayer(treemapprevValue);
				if(layerprev)
				{layerprev.fire('mouseout')}
			}
			}
		}
	}

	treemap_onEachFeature(feature,layer){
		if(feature.geometry.type==="MultiPolygon"){
			layer.setStyle({fillColor: feature.properties.Color,color:feature.properties.Color,weight:0.5})
		}
		else {layer.on('mouseover', (e) => {
			e.target.setStyle(this.treemapHighlightStyle(feature))
			layer.bindTooltip(popupContent).openTooltip();
		})

		layer.on('mouseout', (e) => {
			e.target.setStyle(this.treemapAgglosStyle(feature))
		})

		layer.on('click', (e) => {
			e.target.setStyle(this.treemapHighlightStyle(feature))
			this.state.map.setView(layer._latlng, 10);
		})

		let popupContent = "<table class='tooltip-table'>";
		popupContent += "<tr><td class='title'></td>" + feature.properties.NAME + "</tr>";
		popupContent += "</table>";
		layer.bindPopup(popupContent).openPopup();
		layer._leaflet_id = feature.properties.City_ID;
	}
}

	treemapHighlightStyle(feature){
		return({
			radius: 13,
			fillOpacity: .9,
			stroke: true,
			color: feature.properties.Color,
			weight: 1,
		})
	}

	treemapAgglosStyle(feature){
		return({
			radius: 4,
			fillColor: feature.properties.Color,
			fillOpacity: 0.4,
			stroke: true,
			color: feature.properties.Color,
			weight: 1,
		})
	}

	treemap_pointToLayer(feature, latlng){
		if(feature.geometry.type==="MultiPolygon"){
		feature.setstyle({fillColor: feature.properties.Color})
		} else {
		const geojsonMarker = this.treemapAgglosStyle(feature);
		return L.circleMarker(latlng, geojsonMarker);
	}}

	placeHolder_filter(feature) {
		if (feature.properties.Year === "a") {
			return true
		}
	}

	treemap_filter(feature) {
		if (feature.properties.treemap_ID === this.props.treemapValue ) {
			return true
		}
	}

	agglos_cityFilter(feature){
		if (feature.properties.ID === this.ID){
			return true
		}
	}

	agglos_pointToLayer(feature, latlng){
		const geojsonMarker = this.defaultAgglosStyle(feature);
		return L.circleMarker(latlng, geojsonMarker);
	}

	highlightAgglosStyle(feature){
		return({
			radius: feature.properties.Size*3+6,
			// fillColor: '#E8AE40',
			fillOpacity: 1,
			stroke: true,
			// color: '#E8AE40',
			weight: 1,
		})
	}

	selectedAgglosStyle(){
		return({
			radius: 20,
			fillColor: 'red',
			fillOpacity: 0.4,
			stroke: true,
			color: '#E8AE40',
			weight: 1,
		})
	}

	defaultAgglosStyle(feature){
		return({
			radius: this.getRadius(feature.properties.Size),
			fillColor: this.getColor(feature.properties.Size),
			fillOpacity: 0.4,
			stroke: true,
			color: this.getColor(feature.properties.Size),
			weight: 1,
		})
	}

	getRadius(d){
		return(
			d === 6 ? d*3 :
			d === 5 ? d*3 :
			d === 4 ? d*3 :
			d === 3 ? d*3 :
			d === 2 ? d*3 :
			d === 1 ? d*3 : d*10
		)
	}

	getColor(d){
		return(
			d === 6 ? '#E73741' :
			d === 5 ? '#df521e' :
			d === 4 ? '#e1b400' :
			d === 3 ? '#32a674' :
			d === 2 ? '#0b68af' :
			d === 1 ? '#993484' : 'black'
		)
	}

	// agglos_onEachFeature(feature, layer) {
	// 	layer.on('mouseover', (e) => {
	// 		e.target.setStyle(this.highlightAgglosStyle())
	// 	})
	//
	// 	layer.on('mouseout', (e) => {
	// 		e.target.setStyle(this.defaultAgglosStyle(feature))
	// 		if(feature.properties.clicked=true){this.highlightAgglosStyle()}
	// 	})
	//
	// 	layer.on('change', (e) => {
	// 		let popupContent = "<table class='tooltip-table'>";
	// 		popupContent += "<tr><td class='title'>Name:</td><td class='data'>" + feature.properties.cityName + "</td></tr>";
	// 		popupContent += "<tr><td class='title'>Population:</td><td class='data'>" + feature.properties.cityID + "</td></tr>";
	// 		popupContent += "</table>";
	// 		layer.bindPopup(popupContent).openPopup();
	// 	})
	//
	// 	layer.on('click', (e) => {
	// 		feature.properties.clicked=true;
	// 		e.target.setStyle(this.highlightAgglosStyle())
	// 		const cityID = feature.properties.cityID;
	// 		const cityName = feature.properties.cityName;
	// 		const a = { value:cityID, label:cityName}
	// 		this.props.sendAgglosValueToContent(a);
	// 		if(feature.properties.clicked=true){feature.properties.clicked=false}
	//
	// 	})
	// 	layer._leaflet_id = feature.properties.ID;
	//
	// }

	render() {
		return (
			<div id="map"/>


		)
	}
}

export default LeafletMap;
