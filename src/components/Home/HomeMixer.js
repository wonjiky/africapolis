import React from 'react';
import MaterialIcon from 'material-icons-react';
// import { Link, Events, scroller } from 'react-scroll'
    
const HomeMixer = props => {
    return(
        <div className="home_mixer-wrapper">
            <div className="home_mixer-list">
                <ul className="list-unstyled">
                    <h6>{props.narratives[0].content_title}</h6>
                        {props.narratives.map((story, i) => (
                            <li key={i} id={props.selectedContent === story.ID && 
                                    props.contentFilter === story.content ? 'clicked' : ' '}
                                    onClick={() => props.contentSelect(story)}>
                                <MaterialIcon icon="arrow_forward" size={15} color='#585858' />
                                {story.title}
                            </li>
                        ))}
                    <hr />
                    <h6>{props.treemap[0].content_title}</h6>
                        {props.treemap.map((treemap, i) => (
                            <li key={i} id={props.selectedContent === treemap.ID && 
                                props.contentFilter === treemap.content ? 'clicked' : ' '}
                                onClick={() => props.contentSelect(treemap)}>
                                <MaterialIcon icon="arrow_forward" size={15} color='#585858' />
                                {treemap.title}
                            </li>
                        ))}
                </ul>
            </div>
            <div className="home_mixer-download">
                    {/* {this._renderDownloadFullData()} */}
                    <img src="assets/images/swac-oecd.png" width="100%"
                    alt="Africapolis Visualise Urbanisation in Africa"/>
            </div>
        </div>
    );
}

export default HomeMixer;
