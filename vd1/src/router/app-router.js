import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from '../components/about/About';
import Home from '../components/Home/Home' ;
import Content from '../components/content/Content';

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Content} />
                    <Route exact path="/Home" component={Home} />
                    <Route path="/about" component={About} />
                </div>
          </Router>
        );
    }
}

export default AppRouter;