import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RenderContent from './RenderContent';
import RenderList from './RenderList';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';

class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          scrollTop: 0,
        };
      }
    _storyButtons(){
        return(
            <div>
                <Button color="primary" id="story-button-right" onClick={this._goToNextSlide}>
                    <ChevronRight/>
                </Button>
                <Button color="primary" id="story-button-left" onClick={this._goToPrevSlide}>
                    <ChevronLeft/>
                </Button>
            </div>
        )
    }

    valueFromTreemap(e){
        this.props.valueFromTreemap(e);
    }

    valueFromTreemap_click(e){
        this.props.valueFromTreemap_click(e);
    }
    contentSelect(e){
        this.props.contentSelect(e);
    }

    normalize(num, in_min, in_max, out_min, out_max){
        return (num-in_min) * (out_max-out_min) / (in_max-in_min) + out_min;
    }

    handleScroll = event => {
        let num = event.target.scrollTop
        let number = this.normalize(num, 0, 16293, 0, 1)
        let value = Math.round(number * 1000) / 1000;
        this.setState({
          scrollTop: value,
        });
      };


    render() {
        return(
            <Grid fluid className="content">
                <Row className="content-row">
                    <Col md={3} className="mixers">
                        <RenderList
                            whatsnew={this.props.whatsnew}
                            contentSelect={this.contentSelect.bind(this)}
                            narratives={this.props.narratives}
                            treemap={this.props.treemap}
                            selectedContent={this.props.selectedContent}
                            contentFilter={this.props.contentFilter}
                        />
                    </Col>
                    <Col md={9} className="homeContent">
                        <RenderContent
                            //Sending
                            narratives={this.props.narratives}
                            treemap={this.props.treemap}
                            selectedContent={this.props.selectedContent}
                            contentFilter={this.props.contentFilter}
                            //Receiving
                            valueFromTreemap={this.valueFromTreemap.bind(this)}
                            valueFromTreemap_click={this.valueFromTreemap_click.bind(this)}
                        />
                    </Col>
                </Row>
            </Grid>
        );

    }
}

export default HomeContent;
