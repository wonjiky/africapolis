import React, { Component } from 'react';
import Map from '../Map';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import Fade from 'react-reveal/Fade';
import '../../css/aboutus.css'


class AboutWrapper extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }
    render() {
        return(
            <Grid fluid className="aboutus-wrapper">
                    <Col md={8} mdOffset={2}>
                        <Fade bottom>



                                <Row className="about-text-wrapper">
                                
                                    <Col md={6} className="about-img">
                                        <img src="assets/images/swac-oecd.png" height="10%"
                                        alt="Africapolis Visualise Urbanisation in Africa"/>
                                        <br/>
                                        <img src="assets/images/e-geopolis.png" height="10%"
                                        alt="Africapolis Visualise Urbanisation in Africa"/>
                                        <br/><br/><br/><br/><br/>
                                        <img src="assets/images/SDG-11.png" height="5%"
                                        alt="Africapolis Visualise Urbanisation in Africa"/>

                                    </Col>
                                    <Col md={6} className="aboutus-4">
                                        <div className="text">
                                        <br/><br/>
                                            Africapolis.org and the 2019 Africapolis Update is produced by the Sahel and West Africa Club (SWAC) in collaboration with e-geopolis.org.<br/><br/>
                                            The Africapolis project started in 2008 with support from the French Development Agency (AFD). The 2019 update is made possible by regular funding from SWAC members and by additional funding from USAID.<br/><br/><br/><br/>
                                        </div>
                                        <div className="text">
                                            Africapolis contributes to Sustainable Development Goal 11 to “make cities and human settlement inclusive, safe, resilient and sustainable” by providing policy makers and researchers with a unique insight into the African urban landscape and a strong basis for the analyses and strategies needed to support sustainable and co-ordinated urban development.
                                        </div>
                                    </Col>
                                </Row>
                        </Fade>
                        <Fade bottom>
                            <div className="aboutus-4">
                                <p><span>THE SAHEL AND WEST AFRICA CLUB</span></p><br/>
                                SWAC is is an independent, international platform. Its Secretariat is hosted at<br/>the Organisation for Economic Co-operation and Development (OECD). <br/><br/>
                                Its mission is to promote regional policies that will improve the economic and<br/>social well-being of people in the Sahel and West Africa.
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="abouthrwrapper">
                                <hr className='aboutushr'/>
                            </div>
                        </Fade>

                        <Fade bottom>
                            <div className="aboutus-4">
                                <p><span>Its members are</span></p><br/>
                                <p>Austria, Belgium, Canada, CILSS, the ECOWAS Commission, the European Union, France,<br/> Luxembourg, the Netherlands, Switzerland, the UEMOA Commission and the United States. </p>
                            </div>
                        </Fade>
                        <Fade bottom className="lastfade">
                            <Row className="logo-wrapper">
                                <Col md={2} className="logo"><Paper square={true} className="logopaper">
                                        <div className="logoitems">
                                            <img src="assets/images/austria.jpg" width="70%"
                                                alt="Africapolis Visualise Urbanisation in Africa"/>
                                        </div>
                                </Paper></Col>
                                <Col md={2} className="logo"><Paper square={true} className="logopaper">
                                    <div className="logoitems">
                                        <img src="assets/images/belgium.png" width="70%"
                                                alt="Africapolis Visualise Urbanisation in Africa"/>
                                    </div>
                                </Paper></Col>
                                <Col md={2} className="logo"><Paper square={true} className="logopaper">
                                    <div className="logoitems">
                                        <img src="assets/images/canada.png" width="70%"
                                            alt="Africapolis Visualise Urbanisation in Africa"/>
                                    </div>
                                </Paper></Col>
                                <Col md={2} className="logo"><Paper square={true} className="logopaper">
                                <div className="logoitems"><img src="assets/images/cliss.jpg" height="50%"
                                        alt="Africapolis Visualise Urbanisation in Africa"/>
                                        </div>
                                </Paper></Col>
                            </Row>
                            <Row className="logo-wrapper">
                                <Col md={2} className="logo"><Paper square={true} className="logopaper">
                                <div className="logoitems"> <img src="assets/images/ECOWAS.jpg" height="50%"
                                        alt="Africapolis Visualise Urbanisation in Africa"/>
                                        </div>
                                </Paper></Col>
                                <Col md={2} className="logo"><Paper square={true} className="logopaper">
                                <div className="logoitems"><img src="assets/images/EU.jpg" height="40%"
                                        alt="Africapolis Visualise Urbanisation in Africa"/>
                                        </div>
                                </Paper></Col>
                                <Col md={2} className="logo"><Paper square={true} className="logopaper">
                                <div className="logoitems"><img src="assets/images/france.jpg" height="30%"
                                        alt="Africapolis Visualise Urbanisation in Africa"/>
                                        </div></Paper></Col>
                                        <Col md={2} className="logo"><Paper square={true} className="logopaper">
                                        <div className="logoitems">
                                        <img src="assets/images/lux.png" height="25%"
                                              alt="Africapolis Visualise Urbanisation in Africa"/>

                                        </div>
                                    </Paper></Col>
                            </Row>
                            <Row className="logo-wrapper addmargin">
                                  <Col md={2} className="logo"><Paper square={true} className="logopaper">
                                  <div className="logoitems">
                                  <img src="assets/images/netherlands.jpg" height="30%"
                                    alt="Africapolis Visualise Urbanisation in Africa"/>
                                    </div>
                                </Paper></Col>

                                <Col md={2} className="logo"><Paper square={true} className="logopaper">
                                <div className="logoitems"><img src="assets/images/switzerland.png" height="30%"
                                        alt="Africapolis Visualise Urbanisation in Africa"/>
                                        </div>
                                </Paper></Col>
                                <Col md={2} className="logo"><Paper square={true} className="logopaper">
                                <div className="logoitems"><img src="assets/images/UEMOA.jpg" height="40%"
                                        alt="Africapolis Visualise Urbanisation in Africa"/>
                                        </div></Paper></Col>
                                <Col md={2} className="logo"><Paper square={true} className="logopaper">
                                    <div className="logoitems">
                                    <img src="assets/images/US.png" height="30%"
                                            alt="Africapolis Visualise Urbanisation in Africa"/>
                                    </div>
                                </Paper></Col>
                            </Row>
                        </Fade>
                    </Col>
            </Grid>
        );
    }
}

export default AboutWrapper
