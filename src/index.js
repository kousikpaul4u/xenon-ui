import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'material-icons/iconfont/material-icons.css';
import './styles/bootstrap/bootstrap.min.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
