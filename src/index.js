import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./containers/App";
import {Provider} from "react-redux";
import {createStore} from "redux";
import "tachyons";
import registerServiceWorker from './registerServiceWorker';
import search_robots from "./reducers";
const store = createStore(search_robots);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
