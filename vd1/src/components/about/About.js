import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class About extends Component {
    render() {
        return (
            <div>
               About page 

               <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/login">Topics</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default About;