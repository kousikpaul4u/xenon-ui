import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'material-icons/iconfont/material-icons.css';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
