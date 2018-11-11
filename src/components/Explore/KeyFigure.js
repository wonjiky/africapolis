import React, { Component } from 'react';
import CountryHistogram from './CountryHistogram';
import CityHistogram from './CityHistogram';
import AnimateHeight from 'react-animate-height';

class KeyFigure extends Component {
    constructor(props){
		super(props);
		this.state={
			height:0
		}
        this.renderInfo = this.renderInfo.bind(this);
    }
	
	handleClick = () => {
		this.setState({
			height: this.state.height === 0 ? "auto" : 0
		});
	};
	
	renderInfo(selectedCountry, countryData){
		const list = countryData.find(u => u.ID  === selectedCountry);
		if(list === undefined){
			return <div></div>
		}else{
			return(
				<div className="explore_country-info">
					<div className="info-button">
						<button className='accordion' onClick={this.handleClick}>
						<h3>Country</h3>{this.state.height === 0 ? <i className="material-icons">keyboard_arrow_down</i> : <i className="material-icons active">keyboard_arrow_up</i>}
						</button>
					</div>
					<hr className="country_hr"/>
					<AnimateHeight height={this.state.height} className="accordion-content">
						<ul>
							<li>{list.Capital}</li>
							<li>{list.Population}</li>
							<li>{list.Area}km&sup2;</li>
							<li>{list.Text}</li>
						</ul>	
					</AnimateHeight>
				</div>
			)
		}
	}

	valueFromCountryHistogram(value){
		this.props.valueFromCountryHistogram(value);
	}

    render() {
		
		const { selectedCountry, countryData, selectedAgglos, agglosData } = this.props;
        if(selectedCountry || selectedAgglos){
			return(
				<div className="histogram_container">
					<div className="explore_country-wrapper">
						{this.renderInfo(selectedCountry, countryData)}
						<CountryHistogram 
							selectedCountry={selectedCountry} 
							countryData={countryData} 
							valueFromCountryHistogram={this.valueFromCountryHistogram.bind(this)}
							timeSliderValue = {this.props.timeSliderValue}
						/>
					</div>
					<div className="explore_agglos-wrapper">
						<CityHistogram 
							 selectedAgglos={selectedAgglos}
							 selectedCountry={selectedCountry}
							 countryData={countryData} 
							 agglosData={agglosData}
							 valueFromCountryHistogram={this.valueFromCountryHistogram.bind(this)}
							//  valueFromCityHistogram={this.valueFromCityHistogram.bind(this)}
						/>
					</div>
				</div>
			);
		}else{
			return(
				<div></div>
		  );
		}
    }
}

export default KeyFigure;
