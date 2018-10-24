import React, { Component } from 'react';
import RenderList from './RenderList';
// import Button from '@material-ui/core/Button';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';

class HomeMixer extends Component {

    constructor(props){
        super(props)
        this.state = {
            storyList: false,
            btnDropleft: false,
            overviewList: false
        };
    }

    contentSelect(e){
        this.props.contentSelect(e);
    }
    
    render() {
        return(
          <RenderList 
            contentSelect={this.contentSelect.bind(this)} 
            narratives={this.props.narratives}
            treemap={this.props.treemap}

            selectedContent={this.props.selectedContent}   
            contentFilter={this.props.contentFilter} 
  
        />
        );
    }

}

export default HomeMixer;