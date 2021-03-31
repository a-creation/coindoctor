/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

 import React, { Component } from 'react';
 import MainContainer from './containers/MainContainer.jsx';
 import { render } from 'react-dom';
 
 class App extends Component {
  //  constructor(props) {
  //    super(props);
  //  }
 
   render() {
     return(
       <div>
         hi
         <MainContainer/>
       </div>
     );
   }
 }
 
 export default App;
 
 