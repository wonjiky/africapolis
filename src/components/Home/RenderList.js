import React, { Component } from 'react';
import { Grid, Col } from 'react-flexbox-grid';
import MaterialIcon from 'material-icons-react';
import { Link, Events, scroller } from 'react-scroll'


class RenderList extends Component {

    componentDidMount() {
        Events.scrollEvent.register('begin', function() {
            // console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function() {
            // console.log("end", arguments);
        });
    }

    scrollTo(e) {
        console.log(e)
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }

    handleSetActive(e){
        console.log(e)
    }

    list(stories, treemap, selectedContent, filter, whatsnew){
        return(
            <section>
                <ul className="list-unstyled">
                {/* <i className="material-icons" id="icon-size">public</i> */}
                    <h6>What is Africapolis</h6>
                        {stories.map((story, i) => (
                                <li
                                key={i}
                                id={selectedContent === story.ID && filter === story.content ? 'clicked' : ' '}
                                onClick={() => this.props.contentSelect(story)}>
                                    <MaterialIcon icon="arrow_forward" size={15} color='#585858' />
                                    {story.title}
                                </li>


                            ))}
                    <hr />
                    <h6>Data Driven Stories</h6>
                    {treemap.map((treemap, i) => (
                        <li
                        key={i}
                        id={selectedContent === treemap.ID && filter === treemap.content ? 'clicked' : ' '}
                        onClick={() => this.props.contentSelect(treemap)}>
                            <MaterialIcon icon="arrow_forward" size={15} color='#585858' />
                            {treemap.title}
                        </li>
                    ))}
                     <hr />
                     <h6>What's New?</h6>
                     {whatsnew.map((entry, index) => (
                            <li key={index}>
                                <MaterialIcon icon="arrow_forward" size={15} color='#585858' />
                                {entry.title}
                            </li>
                    ))}
                </ul>

            </section>
        );
    }
    _renderDownloadFullData(){
        return(
            <div>
            <MaterialIcon icon="add_circle_outline" size={25} color='#585858' />
            <p>Annual Report 2018</p>
            </div>
        )
    }

    render(){
        return(
            <Grid fluid id="mixer">
                    <Col className="home-mixer-list" >
                        {this.list(
                            this.props.narratives,
                            this.props.treemap,
                            this.props.selectedContent,
                            this.props.contentFilter,
                            this.props.whatsnew)}
                    </Col>
                    <Col md={12} className="mixer-download">
                            <hr/>
                            {this._renderDownloadFullData()}
                            <hr/>
                            <img src="africapolis/assets/images/swac-oecd.png" width="100%"
                            alt="Africapolis Visualise Urbanisation in Africa"/>
                    </Col>
                </Grid>
        )
    }

}

export default RenderList;
