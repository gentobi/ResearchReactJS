import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './components/topmenu/TopMenu';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

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
    render() {
        return (
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
            <div className='app-content'>
                <Content title='For those about to rock...' imagePosition='order-lg-2' image="img/01.jpg"
                    content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.'>
                </Content>
                <Content title='We salute you!' image="img/02.jpg"
                    content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.'>
                </Content>
                <Content title='Let there be rock!' imagePosition='order-lg-2' image="img/03.jpg"
                    content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.'>
                </Content>
            </div>
            <Footer></Footer>    
        </div>
        );
    }
}

export default App;