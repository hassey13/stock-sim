import React, { Component } from 'react';

class Investment extends Component {
  constructor() {
    super()
    this.state = {
      wallet: 10000.00
    }
  }

  render() {
    return (
      <div className='investment'>
        <p>You have ${ this.state.wallet }</p>
        <button>Buy</button>
        <button>Sell</button>
      </div>
    );
  }
}

export default Investment;
