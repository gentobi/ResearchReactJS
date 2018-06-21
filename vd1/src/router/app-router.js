import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from '../components/about/About';
import Home from '../components/Home/Home' ;
import Login from '../components/login/Login';
import SignUp from '../components/signup/SignUp';

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/login" component={Login} />
                </div>
          </Router>
        );
    }
}

export default AppRouter;