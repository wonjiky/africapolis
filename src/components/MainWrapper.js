import React, { Component } from 'react';
import HomeWrapper from './Home/HomeWrapper';
import ExploreWrapper from './Explore/ExploreWrapper';
import AboutWrapper from './Aboutus/AboutWrapper';
import * as Headers from './Header';
import { NARRATIVES, WHATSNEW } from '../shared/narratives';
import { TREEMAP } from '../shared/treemap';
import { COUNTRYINFO } from '../shared/info_country';
import { TREEMAP_BUILDUP } from '../shared/treemap_buildup'
import { AFRICA_ONE } from '../shared/geo_shades';
import { AGGLOMERATIONINFO } from '../shared/info_agglomeration';
import { AFRICA_CONTINENT } from '../shared/geo_country';
import { AGGLOS } from '../shared/geo_agglomeration';


import { }from 'react-fontawesome';
import '../css/main.css';
import {Switch, Route, Redirect } from 'react-router-dom';

class MainWrapper extends Component {

	//defining the state

		state = {
			narratives: NARRATIVES,
			whatsnew: WHATSNEW,
			countryData: COUNTRYINFO,
			geo_shades: AFRICA_ONE,
			geo_country: AFRICA_CONTINENT,
			geo_agglomeration: AGGLOS,
			info_agglomeration: AGGLOMERATIONINFO,
			treemap: TREEMAP,
			treemap_buildup: TREEMAP_BUILDUP
		};
		// window.countrydata = africa_continent;

	drawerToggleClick = () => {
		this.setState((prevState) => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen}
		});
	};

	backdropClickHandler = () => {
		this.setState({sideDrawerOpen: false});
	};

    render() {
		let backdrop;
		if (this.state.sideDrawerOpen){
			backdrop = <Headers.Backdrop click={this.backdropClickHandler} />;
		}
		return (   
			<div style={{height: '100%'}}>
				<Headers.Header drawerClickHandler={this.drawerToggleClick}/>
				<Headers.SideDrawer show={this.state.sideDrawerOpen}/>
				{backdrop}
				<Switch>
					<Route path="/home" component={() => <HomeWrapper 
							narratives={this.state.narratives}
							whatsnew={this.state.whatsnew}
							treemap={this.state.treemap}
							africaOne={this.state.geo_shades}
							treemap_buildup={this.state.treemap_buildup}
							/>}/>
					<Route exact path={`/explore`} component={() => <ExploreWrapper 
						africaOne={this.state.geo_shades}
						africaContinent={this.state.geo_country}
						agglosGeo={this.state.geo_agglomeration}
						countryData={this.state.countryData}
						agglosData={this.state.info_agglomeration}
						/> } />
					<Route exact path={`/aboutus`} component={() => <AboutWrapper/> } />
					<Redirect to="/home" />
				</Switch>
			</div>
		);
	}
}

export default MainWrapper;