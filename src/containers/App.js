import React, { Component } from 'react';

import Header from '../components/Header'
import Main from '../components/Main'
import '../../public/stylesheets/index.css';

const io = require('socket.io-client')

class App extends Component {

  constructor() {
    super()
    this.state = {
      socket: null,
      price: null,
      buttonClicked: true,
      stock: {
        name: "Button",
        ticker: "BTN",
        price: 24.54,
        open: 24.54,
        close: "-",
        high: 24.54,
        low: 24.54,
        yearHigh: 24.54,
        yearLow: 5.12,
        marketCap: "250 Mil",
        volume: "1,242,800"
      }
    }
  }

  componentDidMount(){
    const socket = io.connect( 'http://localhost:4000' )
    this.setState( { socket: socket } )

    socket.on('priceUpdate', ( price ) => {
      let stock = this.state.stock
      stock = Object.assign( {}, stock, { price: price })
      this.setState( { stock: stock } )
      document.title = `Button | ${this.state.stock.price}`
    })



  }

  render() {

    if ( this.state.buttonClicked ) {
      return (
        <div>
          <Header stock={ this.state.stock } />
          <Main stock={ this.state.stock }/>
        </div>
      )
    }

    return ( <button>Click me please!</button>)
  }
}

export default App;
