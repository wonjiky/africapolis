import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import CountryHistogram from './CountryHistogram';
import CityHistogram from './CityHistogram';
import BarChart from './BarChart';
class KeyFigures extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    valueFromCountryHistogram(value){
        this.props.valueFromCountryHistogram(value);
    }
    valueFromCityHistogram(value){
        console.log(value);
    }
    
    render() {
        const { selectedCountry, countryData, agglosData, selectedAgglos } = this.props;
        return(
            <Grid fluid className="keyFigure">
                <Row>
                    {/* <Col md={12}>
                        <h6>Key Figures</h6>
                        <br/>
                    </Col> */}
                    <Col md={12} className="countryHistogram-Wrapper">
                        <CountryHistogram 
                            selectedCountry={selectedCountry} 
                            countryData={countryData} 
                            valueFromCountryHistogram={this.valueFromCountryHistogram.bind(this)}
                            />
                    </Col>
                    <Col md={12} className="countryHistogram-Wrapper" >
                       <CityHistogram 
                            selectedAgglos={selectedAgglos}
                            selectedCountry={selectedCountry}
                            countryData={countryData} 
                            agglosData={agglosData}
                            valueFromCountryHistogram={this.valueFromCountryHistogram.bind(this)}
                            valueFromCityHistogram={this.valueFromCityHistogram.bind(this)}
                        />
                    </Col>
                </Row>
            </Grid>
            
        );
    }

}

export default KeyFigures;