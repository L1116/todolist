import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from '../store/configerStore';


class RouterApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route path='/' component={App} />
                </Router>
            </Provider>
        );
    }
}
export default RouterApp;