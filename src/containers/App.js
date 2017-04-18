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
      buttonClicked: true
    }
  }

  componentDidMount(){
    const socket = io.connect( 'http://localhost:4000' )
    this.setState( { socket: socket } )

    socket.on('priceUpdate', ( price ) => {
      this.setState( { price: price } )
    })


  }

  render() {

    if ( this.state.buttonClicked ) {
      return (
        <div>
          <Header price={this.state.price} />
          <Main />
        </div>
      )
    }

    return ( <button>Click me please!</button>)
  }
}

export default App;
