import React, { Component } from 'react';
import ExploreContent from './ExploreContent';
import Map from '../Map';
import '../../css/explore.css';
import { Row, Col } from 'react-flexbox-grid';

class ExploreWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            // selectedCountry: null,
            selectedCountry: '',
            selectedAgglos: '',
            origin: '',
            exploreWrapperIsMounted: true,

        };
        this.handleCountryValueFromMap = this.handleCountryValueFromMap.bind(this);
        this.handleCountryValueFromSearch = this.handleCountryValueFromSearch.bind(this);
        this.handleAgglosValueFromMap = this.handleAgglosValueFromMap.bind(this);
        this.handleAgglosValueFromSearch = this.handleAgglosValueFromSearch.bind(this);
        this.handleSizeArray=this.handleSizeArray.bind(this);
    }

    // componentDidUpdate(prevState, prevProps){
    //     if(prevProps.selectedCountry !== this.state.selectedCountry){
    //         this.setState({
    //             selectedAgglos: ''
    //         })
    //     }
    // }

    handleCountryValueFromSearch(a){
        let selected = a === null ? '' : a.value
        let value = a === null ? '' : a
        let selectedIsArray = selected === null ? false : value.constructor === Array;

        if(selectedIsArray === true){
            this.setState({
                origin:'search',
                selectedCountry: '',
            })
        }else{
            this.setState({
                origin:'search',
                selectedCountry: selected,
            })
        }
    }

    handleAgglosValueFromSearch(c){
        let selectedCountry = c === null ? '' : c.countryID

        let selected = c === null ? '' : c.value
        let value = c === null ? '' : c
        let selectedIsArray = selected === null ? false : value.constructor === Array;
        if(selectedIsArray){
            this.setState({
                origin:'search',
                selectedAgglos: '',
            })
        }else{
            this.setState({
                origin:'search',
                selectedCountry: selectedCountry,
                selectedAgglos: selected,
            })
        }
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

    handleCountryValueFromMap(e){
        this.setState({
            origin:'map',
            selectedCountry: e.value,
        })
    }

    handleAgglosValueFromMap(d){
        this.setState({
            origin:'map',
            selectedAgglos: d.value,
        })
    }

    handleSizeArray(e){


      this.setState({
        sizeArray: e
      })
    }

    render() {
        const {
            agglosData,
            selectedCountry
        } = this.props;

        const agglosList = this.filterAgglos(agglosData, selectedCountry);

        return(
            <Row className="full-height">
                <Col md={4} className="no-margin">
                    <Map
                        //data to Map
                        africaOne={this.props.africaOne}
                        africaContinent={this.props.africaContinent}
                        agglosGeo={this.props.agglosGeo}

                        //values to Map
                        selectedCountry={this.state.selectedCountry}
                        selectedAgglos={this.state.selectedAgglos}
                        exploreWrapperIsMounted={this.state.exploreWrapperIsMounted}

                        //data from Map
                        sendCountryValueToContent={this.handleCountryValueFromMap}
                        agglosValueToMap={this.handleAgglosValueFromMap}
                        sizeArray={this.handleSizeArray}
                    />
                </Col>
                <Col md={8} className="no-margin">
                {/* className="exp-content"> */}
                    <ExploreContent
                        //data to Content
                        countryData={this.props.countryData}
                        agglosData={this.props.agglosData}
                        // filtered={agglosList}

                        //values to Content
                        selectedCountry={this.state.selectedCountry}
                        selectedAgglos={this.state.selectedAgglos}
                        sizeArray={this.state.sizeArray}

                        //data from Content
                        handleCountryValueFromSearch={this.handleCountryValueFromSearch}
                        handleAgglosValueFromSearch={this.handleAgglosValueFromSearch}
                        />
                </Col>
            </Row>
        );

    }

}

export default ExploreWrapper;
