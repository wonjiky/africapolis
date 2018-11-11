import React, { Component } from 'react';
import { Treemap } from 'd3plus-react';

class RenderTreemap extends Component {
  
  render() {
    const data = this.props.data;
		const build = {
			groupBy: ["ID","NAME"],
			data: data.data,
			size: d => d.value,
			on: {
				click: d => this.props.receiveValue_click(d.City_ID), 
				mouseover: d => this.props.receiveValue(d.City_ID)
			},
			tooltip: true,
			tooltipConfig: { 
				body: d=> "<table style=z-index:10000>" + 
				Math.round(d.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + 
				data.measure+"</table>"
			},
			legend: false,
			fill: d => d.Color,
			shapeConfig: {fill:d => d.Color,
			labelConfig: {
				fontResize:false,
				fontSize:13,
				width:50,
				height:1000,
				padding:0.2
				//overflow:10
		}}};

	return(
		<div className="home_treemap-wrapper">
			<div className="home_treemap-title">
				<h2>{data.title}</h2>
				<hr id="hr-treemap"/>
			</div>
			<div className="home_treemap-content">
				<div className="home_treemap-treemap">
					<Treemap config={build}/>
				</div>	
				<div className="home_treemap-text">
					<p>{data.description}</p>
				</div>			
			</div>	
		</div>
		);
	}
}

export default RenderTreemap;
