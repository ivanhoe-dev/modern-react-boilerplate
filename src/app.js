// Libraries
import 'bootstrap';
import '@babel/polyfill';

// React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

// Reduc Dependencies
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers/about';

// Custom Dependencies
import Navbar from './components/navbar/navbar';
import Content from './components/content/content';

// Stylesheet
require('./app.scss');

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger),
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
