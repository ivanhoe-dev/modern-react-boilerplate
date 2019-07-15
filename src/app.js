// Libraries
import 'bootstrap';
import '@babel/polyfill';

// React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Redux Dependencies
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/about';

// Custom Dependencies
import Navbar from './components/navbar/navbar';
import Content from './components/content/content';
import './i18n';

// Stylesheet
require('./app.scss');

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk, logger)),
);

ReactDOM.render((
    <Router>
        <Provider store={store}>
            <Navbar />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-2" />
                    <div className="col-8">
                        <Content />
                    </div>
                    <div className="col-2" />
                </div>
            </div>
        </Provider>
    </Router>
), document.getElementById('root'));
