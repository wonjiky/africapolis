import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ReactGA from 'react-ga';
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';

class Header extends Component {

    constructor(props) {


      ReactGA.initialize('UA-128268752-1');
      ReactGA.pageview(window.location.pathname + window.location.search);


        super(props)
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this); //this toggleNav will become 'this.toggleNav'
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="lg">
					<div className="container-fluid">
                        <NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand id="maintitle" className="mr-auto">
                            <img src="africapolis/assets/images/africapolis_logo.png" height="70"
                              alt="Africapolis Visualise Urbanisation in Africa"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem><NavLink className="nav-link" to="/home">Home</NavLink></NavItem>
                                <NavItem><NavLink className="nav-link" to="/explore">Explore</NavLink></NavItem>
                                <NavItem className="nav-link">Research</NavItem>
                                <NavItem><NavLink className="nav-link" to="/aboutus">About Us</NavLink></NavItem>
                                <a href="https://twitter.com/SWAC_OECD"><TwitterIcon size={32} round={true} /></a>
                                <a href="http://www.facebook.com/OECDSWAC"><FacebookIcon size={32} round={true}/></a>
                                <a href="https://www.linkedin.com/company/sahel-and-west-africa-club-club-du-sahel-et-l-afrique-de-l-ouest/"><LinkedinIcon size={32} round={true} /></a>
                            </Nav>
                        </Collapse>
					</div>
				</Navbar>
            </React.Fragment>
        );
    }

}

export default Header;
