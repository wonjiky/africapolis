import React, { Component } from 'react';
import MainWrapper from './components/MainWrapper';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<MainWrapper className="full-height"/>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
