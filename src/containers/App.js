import React, { Component } from 'react';

import Header from '../components/Header'
import Main from '../components/Main'
import '../../public/stylesheets/index.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      buttonClicked: true
    }
  }

  render() {

    if ( this.state.buttonClicked ) {
      return (
        <div>
          <Header price={"100.00"} />
          <Main />
        </div>
      )
    }

    return ( <button>Click me please!</button>)
  }
}

export default App;
