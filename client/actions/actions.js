/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes';

export const addCoin = () => ({
  type: types.ADD_COIN,
});

export const setTicker = (ticker) => ({
    type: types.SET_TICKER,
    payload: ticker,
});

// export const setLocation = (location) => {
//   return ({
//     type: types.SET_NEW_LOCATION,
//     payload: location
//   })
// }

// export const deleteCard = (marketId) => ({
//   type: types.DELETE_CARD,
//   payload: marketId,
// });