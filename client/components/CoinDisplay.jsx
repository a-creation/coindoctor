/**
 * ************************************
 *
 * @module  CoinDisplay
 * @author
 * @date
 * @description presentation component that renders a single box for each market
 *
 * ************************************
 */

 import React from 'react';

 const CoinDisplay = (props) => {
 
  //  let percent;
  //  if(props.totalCards !== 0) {
  //    percent = ((props.market.numCards / props.totalCards)*100).toFixed(2)
  //  }
  // console.log('props', props)
  const ticker = props.coinSpecs.tickerSymbol.toUpperCase();
  return (
  //  <div className="coinBox">
     <tr>
        <td>{ticker}</td>
        <td>70$</td>
        <td>400 Shares</td>
      </tr>
  //  </div>
   )
 };
 
 export default CoinDisplay;