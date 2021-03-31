/**
 * ************************************
 *
 * @module  MainContainer
 * @author Emily Liu
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
  //import from child components...
import CoinCreator from '../components/CoinCreator.jsx';
import CoinContainer from '../containers/CoinContainer.jsx';

const mapStateToProps = () => ({
  // console.log(state.coins),{
  // totalCoins: state.coins.totalCoins,
  // coinList: state.coins.coinList,
})

const mapDispatchToProps = (dispatch) => ({
  addCoin: () => {
    dispatch(actions.addCoin());
  },
  handleChange: (event) => {
    dispatch(actions.setTicker(event.target.value))
  },
});


class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {/* <div> */}
          <h1 id="header">Crypto Doctor</h1>
          <div><CoinCreator addCoin = {this.props.addCoin} handleChange = {this.props.handleChange}/></div>
          <div><CoinContainer/></div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);