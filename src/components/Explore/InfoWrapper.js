import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import KeyFigures from './KeyFigures';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class InfoWrapper extends Component {
    constructor(props){
        super(props);
        this.renderInfo = this.renderInfo.bind(this);
    }

	renderInfo(selectedCountry, countryData){
		const list = countryData.find(u => u.ID  === selectedCountry);
		if(list === undefined){
			return <div></div>
		}else{
			return(
				<div>
					<ExpansionPanel>
						<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
							<h6>Country Info</h6>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
						<ul className="list-unstyled ">
							<li>
								<h5>{list.Capital}</h5>
								<h5 className="pop-area">{list.Population}</h5>
                <h5 className="pop-area">{list.Area} km&sup2;</h5>
								<p>{list.Text} </p>
							</li>
						</ul>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</div>
			)
		}
	}

	valueFromCountryHistogram(value){
		this.props.valueFromCountryHistogram(value);
	}

    render() {

		const { selectedCountry, countryData, selectedAgglos, agglosData } = this.props;
        if(selectedCountry){
			return(
				<Row className="keyFigure-row">
					<Col md={9} mdOffset={1} className="countrySelected">
						{this.renderInfo(selectedCountry, countryData)}
					</Col>
					<Col md={9} mdOffset={1} className="keyFigure-Wrapper">
					<KeyFigures
						//country data
						countryData={countryData}
						selectedCountry={selectedCountry}
						valueFromCountryHistogram = {this.valueFromCountryHistogram.bind(this)}

						//city data
						agglosData={agglosData}
						selectedAgglos = {selectedAgglos}
						/>
					</Col>
				</Row>
			);
		}else{
			return(
				<Col md={9} mdOffset={1} className="countryUnselected">
					Start by selecting country or agglomeration from search box or map
				</Col>

		  );
		}
    }
}

export default InfoWrapper;
