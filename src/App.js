import './App.css';

import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom'

import CreateAccountPage from './containers/CreateAccountPage/CreateAccountPage';
import LayoutPage from './containers/LayoutPage/LayoutPage';
import LoginPage from './containers/LoginPage/LoginPage';
import { Provider } from 'react-redux'
import React from 'react';
import Store from './helpers/redux/Store'

function App() {
    return (
        <div className="App">
            <Provider store={Store}>
                <Router>
                    <Redirect from='/:param' to='/' />
                    <Route path="/" exact component={LoginPage} />
                    <Route path="/criar-conta" exact component={CreateAccountPage} />
                    <Route path="/quadrinhos" component={LayoutPage} />
                </Router>
            </Provider>
        </div>
    );
}

export default App;
