/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

 import * as types from '../constants/actionTypes';

 const initialState = {
   totalCoins: 0,
   coinList: [],
   newTicker: '',
 };
 
 const coinReducer = (state = initialState, action) => {
   let coinList;
 
   switch (action.type) {
     case types.ADD_COIN: {

       const totalCoins = state.totalCoins + 1;
   
       // create the new market object from provided data
       const newCoin = {
         // what goes in here?
         tickerSymbol: state.newTicker,
         // totalCards: state.totalCards
       };

       // push the new market onto a copy of the market list
       coinList = state.coinList.slice();
       coinList.push(newCoin);
      //  console.log('marketlist', marketList)
      //  console.log('state', state)
       // return updated state
       return {
         ...state,
         coinList,
         totalCoins,
       };
     }
     case types.SET_TICKER: {
       console.log(action.payload);
       return {
         ...state,
         newTicker: action.payload,
       }
     }
     default: {
       return state;
     }
   }
 };
 
 export default coinReducer;
 