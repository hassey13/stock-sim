import React from 'react'

import Heading from './Heading'
import Ticker from './Ticker'
import Investment from '../containers/Investment'

const Header = ( props ) => (
  <div className='header'>
    <Heading stock={ props.stock } />
    <Ticker stock={ props.stock } />
    <Investment stock={ props.stock } />
    <hr />
  </div>
)

export default Header
