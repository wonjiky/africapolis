import React from 'react';
import { NavLink } from 'react-router-dom';

const DrawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
    </button>
);

export const Header = props => {
    return(
        <header className="header">
            <nav className="header_navigation">
                <div className="header_toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className="header_logo">
                    <a href="/">
                    <img src="assets/images/africapolis_logo.png" height='100%' className="logo_long"
                                alt="Africapolis Visualise Urbanisation in Africa"/>
                    <img src="assets/images/africapolis_logo_short.png" height='100%' className="logo_short"
                                alt="Africapolis Visualise Urbanisation in Africa"/>            
                    </a>
                </div>
                <div className="header_spacer"></div>
                <div className="header_nav_items">
                    <ul>
                        <li><NavLink className="nav-link" to="/home">Home</NavLink></li>
                        <li><NavLink className="nav-link" to="/explore">Explore</NavLink></li>
                        <li><NavLink className="nav-link" to="/research">Research</NavLink></li>
                        <li><NavLink className="nav-link" to="/aboutus">About Us</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export const SideDrawer = props => {
    let drawerClass = 'side-drawer';
    if(props.show) {
        drawerClass = 'side-drawer open';
    }
    return(
        <nav className={drawerClass}>
            <ul>
                <li><NavLink className="side-nav-link" to="/home">Home</NavLink></li>
                <li><NavLink className="side-nav-link" to="/explore">Explore</NavLink></li>
                <li><NavLink className="side-nav-link" to="/research">Research</NavLink></li>
                <li><NavLink className="side-nav-link" to="/aboutus">About Us</NavLink></li>
            </ul>
            <div className="side-drawer-download">
                <img src="assets/images/swac-oecd.png" width="100%"
                            alt="Africapolis Visualise Urbanisation in Africa"/>
            </div>
        </nav>
    );
};

export const Backdrop = props => (
    <div className="backdrop" onClick={props.click}/>
);
