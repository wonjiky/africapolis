import React, { Component } from 'react';
import RenderTreemap from './RenderTreemap';
// import { Events } from 'react-scroll'


class HomeContent extends Component {

    content(selectedContent, contentFilter, narratives, treemap){
        const storyList = narratives.find(s => s.ID === selectedContent);
        const treemapList = treemap.find(t => t.ID === selectedContent);
        if(storyList.ID === 0 && contentFilter === 'narrative'){
            return(
                <div className="home_content-1">
                        <div className="home_content-1-1">
                            <h2>{narratives[0].story[0].storyTitle}</h2>
                            <hr id="overview_hr"/>
                            <p>{narratives[0].story[0].storyText}</p>
                        </div>
                        <div className="home_content-1-2">
                            <h2>{narratives[0].story[1].storyTitle}</h2>
                            <hr id="overview_hr"/>
                            <p>{narratives[0].story[1].storyText}</p>
                        </div>
                        <div className="home_content-1-3">
                            <h2>{narratives[0].story[2].storyTitle}</h2>
                            <hr id="overview_hr"/>
                            <p>{narratives[0].story[2].storyText}</p>
                        </div>
                </div>
            )
        } else if (storyList.ID !== 0 && contentFilter === 'narrative'){
            return(
                <div className="home_content-2">
                    <ul className="list-unstyled">
                        <li>
                            <h2>{storyList.title}</h2>
                            <h4>{storyList.subtitle}</h4>
                            <hr id="b_narrative_hr"/>
                        </li>
                        <br/>
                        <li>
                            {this.renderNarrative_Text(storyList.story)}
                        </li>
                    </ul>
                </div>
            )
        } else if ((selectedContent === 0 && contentFilter === 'treemap') || (selectedContent && contentFilter === 'treemap')){
            return(
                <RenderTreemap
                    data={treemapList}
                    receiveValue={this.receiveValue.bind(this)}
                    receiveValue_click={this.receiveValue_click.bind(this)}
                />
            )
        }
    }

    // componentWillUnmount() {
    //     Events.scrollEvent.remove('begin');
    //     Events.scrollEvent.remove('end');
    //   }

    receiveValue(e) {
        this.props.valueFromTreemap(e);
    }

    receiveValue_click = (e) => {
        this.props.valueFromTreemap_click(e);
    }

    renderNarrative_Text(stories){
        return(
            stories.map((story,i) => (
            <div key={i}>
                <h5 id="n_h6">{story.storyTitle}</h5>
                <p>{story.storyText}</p>
                <br/>
                <br/>
            </div>
        )))
    }

    render () {
        return(
            <div className="home_content-container">
                {this.content(this.props.selectedContent,
                    this.props.contentFilter,
                    this.props.narratives,
                    this.props.treemap)}
            </div>
        )
    }
}

export default HomeContent;
