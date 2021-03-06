import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import TopMenu from './components/topmenu/TopMenu';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import AppRouter from './router/app-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



// // Component with normal function
// function One() { 
//     return (
//     <div>
//         <h1> Component one</h1>
//     </div>
//     )
// }

// // Component with arrow function
// var Two = () => {
//     return (
//     <div>
//         <h1> Component two</h1>
//     </div>
//     )
// }

// // Component arrow function (ES6)
// var Three = () => (<div><h1>Component three</h1></div>);

// // Component with class
// class Four extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Component with class</h2>
//             </div>
//         );
//     }
// }

// // props with function
//  function NumberOne(props) {
//      return (
//          <div>
//              <h1>Function Component with props</h1>
//              <h2>{props.title}</h2>
//          </div>
//      )
//  }

//  // props with class
//  const componentTwoTitle = 'Class component with props';
//  class NumberTwo extends Component {
//     render() {
//          return (
//              <div className='col-4'>
//                  <h2>{componentTwoTitle}</h2>
//                  <h3>{this.props.title}</h3>
//              </div>
//          );
//      }
//  }
 
// // Map function
//     const listNumbers = [1,2,3,4,5,6];
// // const listNumbers2 = listNumbers.map((x) => x*2 + ',');

//     const listNumbers3 = listNumbers.map((x) => (
//         <div>
//             So: {x}
//         </div>
//     ));

//   class NumberComponent extends Component {
//       render() {
//           return (
//               <div>
//                   {listNumbers3}
//               </div>
//           );
//       }
//   }
  
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'init'
        }
    }
    
    render() {
        return (
            <Router>
                <div className = "App" >
                    {/* <header className = "App-header" >
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

                    <NumberTwo title="Bat man"></NumberTwo>

                    <NumberComponent></NumberComponent>
                    <p className = "App-intro" >To get started, edit < code > src / App.js </code> and save to reload.</p>  */}
                    <TopMenu></TopMenu>
                    <Header></Header>
                    {/* Page content */}
                    <div className='app-content container'>
                        <AppRouter></AppRouter>
                    </div>
                    {/* Footer */}
                    <Footer></Footer>    
                </div>
            </Router>
        );
    }
}

export default App;