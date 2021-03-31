/**
 * ************************************
 *
 * @module  CoinCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */

 import React from 'react';

 const CoinCreator = (props) => {
   // how do we create the circuit between the store and an input field?
   // how do we update the store from a presentation component?
   // console.log(props);
   return (
       <div id='inputField'>Add Your Coin Ticker (e.g. BTC): 
         <input id='inputText' onChange={props.handleChange} type={'text'}></input>
         <button onClick = {props.addCoin}>Add Coin</button>
       </div>
   )
 };
 
 
 export default CoinCreator;