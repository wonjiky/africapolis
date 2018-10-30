import React, { Component } from 'react';
import { Treemap } from 'd3plus-react';
import { Col, Row } from 'react-flexbox-grid';

class RenderTreemap extends Component {
  render() {
    const data = this.props.data;
		const build = {
			groupBy: [
					"ID","NAME"
					],
			data: data.data,
			size: d => d.value,
      //label: d => d.NAME,
			on: {click:  d => this.props.receiveValue_click(d.City_ID), mouseover: d => this.props.receiveValue(d.City_ID)},
			tooltip: true,
      tooltipConfig: {
        body: d=> "<table style=z-index:10000>"+Math.round(d.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")+data.measure+"</table>"

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
        }}
    };

		return(
      <Row className="explore-content-row">
       <Col md={7} mdOffset={2}  className="treemap-text">
          <ul className="list-unstyled">
            <li id="tree-title">
              {data.title}
              <hr/>
            </li>
            <li id="tree-text">
              {data.description}
            </li>
          </ul>
        </Col>
        <Col md={7} mdOffset={2} className="treemap">
          <div id="viz" className="treemap">
            <Treemap config={build} className="treemap"/>
          </div>
        </Col>
      </Row>
		);
	}
}

export default RenderTreemap;
