import React, { Component } from 'react';
import { Plot } from 'd3plus-react';
import { Col, Row } from 'react-flexbox-grid';

const methods ={
 data : [
    {"year": 1991, "name":"alpha", "value": 15},
    {"year": 1991, "name":"beta", "value": 10},
    {"year": 1991, "name":"gamma", "value": 5},
    {"year": 1991, "name":"delta", "value": 50},
    {"year": 1992, "name":"alpha", "value": 20},
    {"year": 1992, "name":"beta", "value": 10},
    {"year": 1992, "name":"gamma", "value": 10},
    {"year": 1992, "name":"delta", "value": 43},
    {"year": 1993, "name":"alpha", "value": 30},
    {"year": 1993, "name":"beta", "value": 40},
    {"year": 1993, "name":"gamma", "value": 20},
    {"year": 1993, "name":"delta", "value": 17},
    {"year": 1994, "name":"alpha", "value": 60},
    {"year": 1994, "name":"beta", "value": 60},
    {"year": 1994, "name":"gamma", "value": 25},
    {"year": 1994, "name":"delta", "value": 32}
  ],
  type: "Bar",
  x: "year",
  y: "value",
  baseline: 0
//    .discrete("x")
//    .x("x")
//    .y("Urate")
//    .xSort((a, b) => b.Urate - a.Urate)
//    .shape("Bar")
//    .color("light")
}
//   var visualization = d3plus.viz()
// //   .container("#viz")
// //   .data(data)
//   .type("bar")
//   .id("name")
//   .x("year")
//   .y("value")
//   .draw()
class BarChart extends Component {

  render() {
    // const data = data;
	// 	const build = {
	// 		groupBy: [
	// 				"ID","NAME"
	// 				],
	// 		data: data,
	// 		size: d => d.value,
	// 		on: {click:  d => this.props.receiveValue(d.City_ID), mouseover: d => this.props.receiveValue(d.City_ID)},
	// 		tooltip: true,
    //   tooltipConfig: {body: d=>d.value+" Kilometre Square"},
    //   legend: false,
    //   fill: d => d.Color,
    //   shapeConfig: {fill:d => d.Color,
    //     labelConfig: {
    //       fontResize:false,
    //       fontSize:12,
    //       width:100,
    //       height:3000,
    //       padding:3,
    //       overflow:10
    //     }}
    // };

		return(
     
          <div id="viz" className="treemap">
            <Plot config={methods} className="treemap"/>
          </div>                       
		);
	}
}

export default BarChart;