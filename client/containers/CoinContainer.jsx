/**
 * ************************************
 *
 * @module  CoinContainer
 * @author
 * @date
 * @description stateful component that renders MarketCreator and MarketDisplay
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
//  import 
 // import child components...
import CoinDisplay from '../components/CoinDisplay.jsx';
//  import MarketsDisplay from '../components/MarketsDisplay.jsx';

const mapStateToProps = (state) => (console.log(state.coins.coinList),{
  totalCoins: state.coins.totalCoins,
  coinList: state.coins.coinList,
})

const mapDispatchToProps = () => ({
  // create functions that will dispatch action creators
  // addCoin: () => {
  //   dispatch(actions.addCoin());
  // },
  // handleChange: (event) => {
  //   dispatch(actions.setTicker(event.target.value))
  // },
});

 class CoinContainer extends Component {
   constructor(props) {
     super(props);
   }

   componentDidMount() {
     if(coinList[0]){
       
     }
     fetch(`https://api.coingecko.com/api/v3/coins/` + `?localization=false&
     tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`)

    fetch('/api/')
      .then(res => res.json())
      .then((characters) => {
        if (!Array.isArray(characters)) characters = [];
        return this.setState({
          characters,
          fetchedChars: true
        });
      })
      .catch(err => console.log('Characters.componentDidMount: get characters: ERROR: ', err));
  }
   
   render() {
     const coins = [];
     for (let i=0; i<this.props.totalCoins; i++){
       coins.push(<CoinDisplay coinSpecs = {this.props.coinList[i]}/>)
     }

     // console.log(this.props);
     return(
       <div className="innerbox">
         { /* add components here... */ }
         <table className='table'>
           <tr>
            <th>Ticker Symbol</th>
            <th>Coin Gecko Price</th>
            <th>Shares Owned</th>
           </tr>
            {coins}
         </table>
         {/* <MarketsDisplay marketList={this.props.marketList}
         addCard={this.props.addCard} totalCards={this.props.totalCards}
         deleteCard={this.props.deleteCard}/> */}
       </div>
     );
   }
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(CoinContainer);
 