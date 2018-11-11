import React, { Component } from 'react';
import HomeMixer from './HomeMixer';
import HomeContent from './HomeContent';
import MapHome from './MapHome';
import '../../css/home.css';

class HomeWrapper extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedContent:0,
            contentFilter:'narrative',
        };
        this.handleValueFromMixer = this.handleValueFromMixer.bind(this);
        this.valueFromTreemap = this.valueFromTreemap.bind(this);
        this.valueFromTreemap_click = this.valueFromTreemap_click.bind(this);
    }

    handleValueFromMixer(e){
        this.setState({
            selectedContent: e.ID,
            contentFilter: e.content
        })
    }

    valueFromTreemap(e){
        this.setState({
            treemapSelect: e
        })
    }

    valueFromTreemap_click(e){
        this.setState({
            treemapSelect_click: e
        })
    }

    render() {
        const story = this.props.narratives.map((narrative) => {
            return(narrative);
        })

        return(
            <main className="home_main-wrapper">
                <div className="home_map-wrapper">
                    <MapHome
                     //Receving
                     africaOne={this.props.africaOne}
                     treemap_buildup={this.props.treemap_buildup}
                     //Sending
                     treemapValue={this.state.selectedContent}
                     treemapFilter={this.state.contentFilter}
                     treemapSelect={this.state.treemapSelect}
                     treemapSelect_click={this.state.treemapSelect_click}
                    />
                </div>
                <div className="home_content-wrapper">
                    <HomeMixer 
                        whatsnew={this.props.whatsnew}
                        narratives={story}
                        treemap={this.props.treemap}
                        contentSelect={this.handleValueFromMixer}
                        selectedContent={this.state.selectedContent}
                        contentFilter={this.state.contentFilter}
                    />
                    <HomeContent
                        //Sending
                        narratives={story}
                        treemap={this.props.treemap}
                        selectedContent={this.state.selectedContent}
                        contentFilter={this.state.contentFilter}
                        //Receiving
                        valueFromTreemap={this.valueFromTreemap.bind(this)}
                        valueFromTreemap_click={this.valueFromTreemap_click.bind(this)}
                    />
                </div>                
            </main>
        );
    }
}

export default HomeWrapper
