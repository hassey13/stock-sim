import React, { Component } from 'react';

import Advertisements from './Advertisements'
import Intro from '../components/Intro'
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
      buttonClicked: false,
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
    const socket = io.connect( 'http://stock-sim-server.herokuapp.com' )
    this.setState( { socket: socket } )

    socket.on('priceUpdate', ( price ) => {
      let stock = this.state.stock
      stock = Object.assign( {}, stock, { price: price })
      if ( price > this.state.stock.high) {
        stock = Object.assign( {}, stock, { high: price })
      }
      else if ( price < this.state.stock.low ) {
        stock = Object.assign( {}, stock, { low: price })
      }
      this.setState( { stock: stock } )
      document.title = `${this.state.stock.name} | ${this.state.stock.price}`
    })

  }

  handleClick() {
    this.setState( {
      buttonClicked: true
    })
  }

  render() {

    if ( this.state.buttonClicked ) {
      return (
        <div>
          <Header stock={ this.state.stock } />
          <Advertisements />
          <Main stock={ this.state.stock }/>
        </div>
      )
    }

    return ( <Intro onClick={ this.handleClick.bind(this) } />)
  }
}

export default App;
