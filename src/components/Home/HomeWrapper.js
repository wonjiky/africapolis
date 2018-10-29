import React, { Component } from 'react';
import HomeContent from './HomeContent';
import Map from '../Map';
import { Grid, Row, Col } from 'react-flexbox-grid';

class HomeWrapper extends Component {

    constructor(props){
        super(props);
        this.state = {
            homeWrapperIsMounted: true,
            selectedContent:0,
            contentFilter:'narrative',

        };
        this.handleValueFromMixer = this.handleValueFromMixer.bind(this);
        this.handleValueFromMap = this.handleValueFromMap.bind(this);
        this.handleValueFromSearch = this.handleValueFromSearch.bind(this);
        this.handleValueFromTreemap = this.handleValueFromTreemap.bind(this);
        this.handleValueFromTreemap_click = this.handleValueFromTreemap_click.bind(this);
    }

    handleValueFromMixer(e){
        this.setState({
            selectedContent: e.ID,
            contentFilter: e.content
        })
        console.log(this.state.contentFilter, this.state.selectedContent);
    }

    handleValueFromSearch(valueFromSearch){
        this.setState({
            origin:'search',
            selectedCountry: valueFromSearch.value,
            selectedValue: valueFromSearch,
        })
    }

    handleValueFromMap(valueFromMap){
        this.setState({
            origin:'map',
            selectedCountry: valueFromMap.value,
            selectedValue: valueFromMap,
        })
    }

    handleValueFromTreemap(e){
        this.setState({
            treemapSelect: e
        })
    }

    handleValueFromTreemap_click(e){
        this.setState({
            treemapSelect_click: e
        })
    }

    render() {
        const story = this.props.narratives.map((narrative) => {
            return(narrative);
        })
        return(
            <Grid fluid className="full-height">
                <Row className="full-height">
                    <Col md={4} className="no-margin">
                    {/* {this._mapExpand(this.state.mapToggle)} */}
                        <Map
                            //Check Home or Explore
                            homeWrapperIsMounted={this.state.homeWrapperIsMounted}
                            //Receving
                            africaOne={this.props.africaOne}
                            africaContinent={this.props.africaContinent}
                            agglosGeo={this.props.agglosGeo}
                            treemap_buildup={this.props.treemap_buildup}
                            sendValueToContent={this.handleValueFromMap}
                            //Sending
                            treemapValue={this.state.selectedContent}
                            treemapFilter={this.state.contentFilter}
                            treemapSelect={this.state.treemapSelect}
                            treemapSelect_click={this.state.treemapSelect_click}
                        />
                    </Col>
                    <Col md={8} className="no-margin">
                        <HomeContent
                            whatsnew={this.props.whatsnew}
                            narratives={story}
                            treemap={this.props.treemap}
                            contentSelect={this.handleValueFromMixer}
                            selectedContent={this.state.selectedContent}
                            valueFromTreemap={this.handleValueFromTreemap}
                            valueFromTreemap_click={this.handleValueFromTreemap_click}
                            contentFilter={this.state.contentFilter}
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default HomeWrapper
