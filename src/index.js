import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-flexbox-grid/dist/react-flexbox-grid.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import 'react-vis/dist/style.css';
import 'react-input-range/lib/css/index.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById('root'));
registerServiceWorker();
