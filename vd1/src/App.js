import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Component with normal function
function One() { 
    return (
    <div>
        <h1> Component one</h1>
    </div>
    )
}

// Component with arrow function
var Two = () => {
    return (
    <div>
        <h1> Component two</h1>
    </div>
    )
}

// Component arrow function (ES6)
var Three = () => (<div><h1>Component three</h1></div>);

// Component with class
class Four extends Component {
    render() {
        return (
            <div>
                <h2>Component with class</h2>
            </div>
        );
    }
}

// props with function
 function NumberOne(props) {
     return (
         <div>
             <h1>Function Component with props</h1>
             <h2>{props.title}</h2>
         </div>
     )
 }
 
class App extends Component {
    render() {
        return (
        <div className = "App" >
            <header className = "App-header" >
                <img src = {logo} className = "App-logo"alt = "logo" />
                <h1 className = "App-title" > React JS App </h1>
            </header >
            <One></One>

            <Two></Two>

            <Three></Three>

            <Four></Four>
            
            <NumberOne title='Super man'></NumberOne>

            <NumberOne title='Spider man'></NumberOne>

            <NumberOne title='Iron man'></NumberOne>

            <p className = "App-intro" >To get started, edit < code > src / App.js </code> and save to reload.</p> 
        </div>
        );
    }
}

export default App;