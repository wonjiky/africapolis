import React, { Component } from 'react';
import  InfoWrapper  from './InfoWrapper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Select from "react-select";
import { FixedSizeList as List } from "react-window";
import RenderFilter from './RenderFilter';

const height = 35;

class MenuList extends Component {
  render() {
    
    const { children, maxHeight } = this.props;

    return (
      <List
        height={maxHeight}
        itemCount={children.length}
        itemSize={height}
        // initialScrollOffset={initialOffset}
      >
        {({ index, style }) => <div style={style}>{children[index]}</div>}
      </List>
    );
  }
}

class AboutContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            isClearable: true,
            isSearchable: true,
            agglosList: ''
        };
    }

    sendCountryValueToMap(e){
        this.props.handleCountryValueFromSearch(e);
    }

    sendAgglosValueToMap(e){
        this.props.handleAgglosValueFromSearch(e);
    }

    filterAgglos(data, selectedCountry){
        
        const sortedAgglosList = data.sort((a, b) => a.cityName.localeCompare(b.cityName))
        
        if(selectedCountry){
            const agglosValue = sortedAgglosList.filter(u => (u.ID === selectedCountry))
            const filteredAgglosList = agglosValue.map((a,i) => ({value: a.City_ID, label: a.cityName, countryID: a.ID}))
            return(
                filteredAgglosList
            )
        }else{
            return(
                sortedAgglosList.map((a,i) => ({
                    value: a.City_ID, label: a.cityName, countryID: a.ID
            })))
        }
    }

    filterCountry(data){
      const sortedCountryList = data.map((u) => (u)).sort((a, b) => a.Country.localeCompare(b.Country));
      const list = sortedCountryList.map((c, i) => (
      {value: c.ID, label: c.Country }))
      return list
    }

    displayCountry(selectedCountry, data){
        const list = data.find(u => u.ID === selectedCountry);
        if(selectedCountry){
            return(
                ({value: list.ID, label: list.Country})
            )
        }
    }

    displayAgglos(selectedAgglos, data){
        const list = data.find(u => u.City_ID === selectedAgglos);
        if(selectedAgglos) {
            return(
                ({ value: list.City_ID, label: list.cityName})
            )
        }
    }

    render() {
        const { 
            agglosData, 
            selectedAgglos,
            selectedCountry, 
            countryData,
        } = this.props;

        const countryList = this.filterCountry(countryData);
        const agglosList = this.filterAgglos(agglosData, selectedCountry);
        const displayCountry = this.displayCountry(selectedCountry, countryData);
        const displayAgglos = this.displayAgglos(selectedAgglos, agglosData);

        return(
            <Grid fluid className="content">
                <Row className="explore-row">
                    <Col md={3} className="mixers">
                        <RenderFilter/>
                    </Col>
                    <Col md={9} className="exp-content">
                        <Col md={9} mdOffset={1} className="searchPadding">
                            <Select
                                placeholder="Select Country"
                                isClearable={this.state.isClearable}
                                isSearchable={this.state.isSearchable}
                                value={displayCountry}
                                onChange={this.sendCountryValueToMap.bind(this)}
                                options={countryList}
                                // isMulti={true}
                            />
                        </Col>
                        <Col md={9} mdOffset={1}>
                            <Select
                                placeholder="Select City"
                                isClearable={this.state.isClearable}
                                isSearchable={this.state.isSearchable}
                                value={displayAgglos}
                                components={{ MenuList }}
                                onChange={this.sendAgglosValueToMap.bind(this)}
                                options={agglosList}
                            />
                        </Col>
                        <InfoWrapper 
                            selectedCountry={this.props.selectedCountry} 
                            selectedAgglos={this.props.selectedAgglos}
                            agglosData={this.props.agglosData}
                            countryData={this.props.countryData}
                            valueFromCountryHistogram={this.sendCountryValueToMap.bind(this)}
                            />
                        <br/>
                        {/* //change from countryValueForSearch to selectedCountry */}
                        
                    </Col>
                </Row>

            </Grid>
        );
    }
}

export default AboutContent;
